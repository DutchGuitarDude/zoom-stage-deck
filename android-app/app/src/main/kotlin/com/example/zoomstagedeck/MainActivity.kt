package com.example.zoomstagedeck

import android.bluetooth.BluetoothAdapter
import android.bluetooth.BluetoothDevice
import android.bluetooth.BluetoothGatt
import android.bluetooth.BluetoothGattCallback
import android.bluetooth.BluetoothGattCharacteristic
import android.bluetooth.BluetoothGattDescriptor
import android.bluetooth.BluetoothManager
import android.bluetooth.BluetoothProfile
import android.bluetooth.le.ScanCallback
import android.bluetooth.le.ScanResult
import android.bluetooth.le.ScanSettings
import android.content.Context
import android.content.pm.PackageManager
import android.location.LocationManager
import android.widget.Toast
import android.media.midi.MidiDevice
import android.media.midi.MidiDeviceInfo
import android.media.midi.MidiInputPort
import android.media.midi.MidiManager
import android.media.midi.MidiOutputPort
import android.media.midi.MidiReceiver
import android.os.Build
import android.os.Bundle
import android.os.Handler
import android.os.Looper
import android.util.Log
import android.view.WindowManager
import android.webkit.ConsoleMessage
import android.webkit.JavascriptInterface
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebResourceResponse
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.appcompat.app.AppCompatActivity
import androidx.core.view.WindowCompat
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import androidx.webkit.WebViewAssetLoader
import org.json.JSONArray
import org.json.JSONObject
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private var midiManager: MidiManager? = null
    private val openDevices = ConcurrentHashMap<Int, MidiDevice>()
    private val inputPorts = ConcurrentHashMap<Int, MidiInputPort>()
    private val outputPorts = ConcurrentHashMap<Int, MidiOutputPort>()
    private val mainHandler = Handler(Looper.getMainLooper())

    private var selectedZoomInputId: String = ""
    private var selectedZoomOutputId: String = ""
    private var selectedControllerInputId: String = ""
    private var selectedControllerOutputId: String = ""

    // Direct BLE GATT Client for M-VAVE Chocolate Plus & BLE MIDI controllers
    private var bleGatt: BluetoothGatt? = null
    private var bleMidiChar: BluetoothGattCharacteristic? = null
    private var bleDeviceName: String = "M-VAVE Chocolate Plus"
    private var bleScanCallback: ScanCallback? = null
    private val PERMISSION_REQ_CODE = 4001

    private val BLE_MIDI_SERVICE_UUID: UUID = UUID.fromString("03B80E5A-EDE8-4B33-A751-6CE34EC4C700")
    private val BLE_MIDI_CHAR_UUID: UUID = UUID.fromString("7772E5DB-3868-4112-A1A9-F2669D106BF3")
    private val CLIENT_CONFIG_DESCRIPTOR_UUID: UUID = UUID.fromString("00002902-0000-1000-8000-00805F9B34FB")

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Keep stage screen alive while playing
        window.addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON)

        // Initialize WebView
        webView = WebView(this).apply {
            settings.javaScriptEnabled = true
            settings.domStorageEnabled = true
            settings.databaseEnabled = true
            settings.allowFileAccess = true
            settings.allowContentAccess = true
            settings.mediaPlaybackRequiresUserGesture = false
            setBackgroundColor(0xFF0A0E17.toInt())
        }

        // MUST setContentView BEFORE hideSystemUI() so DecorView is non-null!
        setContentView(webView)

        // Safely hide system UI after DecorView is attached
        hideSystemUI()

        // Modern secure asset loader (maps https://appassets.androidplatform.net/assets/ -> assets/)
        val assetLoader = WebViewAssetLoader.Builder()
            .addPathHandler("/assets/", WebViewAssetLoader.AssetsPathHandler(this))
            .addPathHandler("/", WebViewAssetLoader.AssetsPathHandler(this))
            .build()

        webView.webViewClient = object : WebViewClient() {
            override fun shouldInterceptRequest(
                view: WebView,
                request: WebResourceRequest
            ): WebResourceResponse? {
                return assetLoader.shouldInterceptRequest(request.url)
            }
        }

        webView.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(consoleMessage: ConsoleMessage?): Boolean {
                Log.d("ZoomStageDeck", "${consoleMessage?.message()} -- [${consoleMessage?.sourceId()}:${consoleMessage?.lineNumber()}]")
                return true
            }
        }

        // Initialize Android native MIDI (for USB-OTG Zoom MS-50G & USB controllers)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            try {
                midiManager = getSystemService(Context.MIDI_SERVICE) as? MidiManager
                midiManager?.registerDeviceCallback(object : MidiManager.DeviceCallback() {
                    override fun onDeviceAdded(device: MidiDeviceInfo?) {
                        Log.d("ZoomStageDeck", "MIDI Device added: ${device?.id}")
                        device?.let { openMidiDevice(it) }
                        notifyStateChange()
                    }

                    override fun onDeviceRemoved(device: MidiDeviceInfo?) {
                        Log.d("ZoomStageDeck", "MIDI Device removed: ${device?.id}")
                        device?.let { closeMidiDevice(it.id) }
                        notifyStateChange()
                    }
                }, mainHandler)

                midiManager?.devices?.forEach { openMidiDevice(it) }
            } catch (e: Exception) {
                Log.e("ZoomStageDeck", "MidiManager initialization error", e)
            }
        }

        // Register Web MIDI bridge for Zoom Stage Deck
        webView.addJavascriptInterface(AndroidMidiBridge(), "AndroidMidi")

        // Load visual pedalboard
        webView.loadUrl("https://appassets.androidplatform.net/assets/index.html")

        // Discover Bluetooth MIDI controllers (both paired & advertising)
        checkPermissionsAndStartBle()
    }

    override fun onResume() {
        super.onResume()
        hideSystemUI()
        // Re-scan when returning to app (e.g. after pairing in Bluetooth settings)
        if (bleGatt == null) {
            mainHandler.postDelayed({
                checkPermissionsAndStartBle()
            }, 500)
        }
    }

    private fun hideSystemUI() {
        try {
            val decorView = window.decorView ?: return
            WindowCompat.setDecorFitsSystemWindows(window, false)
            val controller = WindowCompat.getInsetsController(window, decorView)
            controller.systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
            controller.hide(WindowInsetsCompat.Type.systemBars())
        } catch (e: Exception) {
            Log.w("ZoomStageDeck", "hideSystemUI error", e)
        }
    }

    override fun onWindowFocusChanged(hasFocus: Boolean) {
        super.onWindowFocusChanged(hasFocus)
        if (hasFocus) hideSystemUI()
    }

    private fun getDeviceName(info: MidiDeviceInfo): String {
        val props = info.properties
        val name = props.getString(MidiDeviceInfo.PROPERTY_NAME)
        if (!name.isNullOrBlank()) return name
        val product = props.getString(MidiDeviceInfo.PROPERTY_PRODUCT)
        if (!product.isNullOrBlank()) return product
        val mfr = props.getString(MidiDeviceInfo.PROPERTY_MANUFACTURER)
        if (!mfr.isNullOrBlank()) return "$mfr MIDI"
        return "MIDI Device ${info.id}"
    }

    private fun hexToBytes(hex: String): ByteArray {
        val clean = hex.replace("[^0-9a-fA-F]".toRegex(), "")
        val len = clean.length / 2
        val result = ByteArray(len)
        for (i in 0 until len) {
            result[i] = clean.substring(i * 2, i * 2 + 2).toInt(16).toByte()
        }
        return result
    }

    private fun bytesToHex(bytes: ByteArray, offset: Int, count: Int): String {
        val sb = StringBuilder(count * 2)
        for (i in offset until (offset + count)) {
            sb.append(String.format("%02X", bytes[i].toInt() and 0xFF))
        }
        return sb.toString()
    }

    private fun openMidiDevice(info: MidiDeviceInfo) {
        if (openDevices.containsKey(info.id)) return

        try {
            midiManager?.openDevice(info, { device ->
                if (device == null) {
                    Log.w("ZoomStageDeck", "Could not open device ${info.id}")
                    return@openDevice
                }
                openDevices[info.id] = device
                val devName = getDeviceName(info)
                Log.d("ZoomStageDeck", "Device opened: $devName (ID: ${info.id})")

                // Connect output port (Device -> Android Web MIDI Input)
                for (p in info.ports) {
                    if (p.type == MidiDeviceInfo.PortInfo.TYPE_OUTPUT) {
                        try {
                            val outPort = device.openOutputPort(p.portNumber)
                            if (outPort != null) {
                                outputPorts[info.id] = outPort
                                outPort.connect(object : MidiReceiver() {
                                    override fun onSend(msg: ByteArray, offset: Int, count: Int, timestamp: Long) {
                                        if (count <= 0) return
                                        val hex = bytesToHex(msg, offset, count)
                                        val jsonBytes = JSONArray()
                                        for (i in offset until (offset + count)) {
                                            jsonBytes.put(msg[i].toInt() and 0xFF)
                                        }

                                        val devIdStr = info.id.toString()
                                        val lowerName = devName.lowercase()
                                        val isZoom = (devIdStr == selectedZoomInputId) ||
                                                (selectedZoomInputId.isEmpty() && (
                                                    lowerName.contains("zoom") ||
                                                    lowerName.contains("ms-50") ||
                                                    lowerName.contains("ms-60") ||
                                                    lowerName.contains("ms-70") ||
                                                    lowerName.contains("multistomp")
                                                ))

                                        val isController = (devIdStr == selectedControllerInputId) ||
                                                (selectedControllerInputId.isEmpty() && !isZoom)

                                        mainHandler.post {
                                            if (isZoom) {
                                                webView.evaluateJavascript("if(window.__onAndroidMidi){window.__onAndroidMidi('zoom', '$hex');}", null)
                                            }
                                            if (isController) {
                                                webView.evaluateJavascript("if(window.__onAndroidMidi){window.__onAndroidMidi('controller', '$hex');}", null)
                                            }
                                            webView.evaluateJavascript("if(window.__androidMidiReceive){window.__androidMidiReceive('$devIdStr', $jsonBytes);}", null)
                                        }
                                    }
                                })
                            }
                        } catch (e: Exception) {
                            Log.e("ZoomStageDeck", "Failed to open output port on ${info.id}", e)
                        }
                        break
                    }
                }

                // Connect input port (Android Web MIDI Output -> Device)
                for (p in info.ports) {
                    if (p.type == MidiDeviceInfo.PortInfo.TYPE_INPUT) {
                        try {
                            val inPort = device.openInputPort(p.portNumber)
                            if (inPort != null) {
                                inputPorts[info.id] = inPort
                            }
                        } catch (e: Exception) {
                            Log.e("ZoomStageDeck", "Failed to open input port on ${info.id}", e)
                        }
                        break
                    }
                }

                notifyStateChange()
            }, mainHandler)
        } catch (e: Exception) {
            Log.e("ZoomStageDeck", "Error opening MIDI device ${info.id}", e)
        }
    }

    private fun closeMidiDevice(deviceId: Int) {
        outputPorts.remove(deviceId)?.close()
        inputPorts.remove(deviceId)?.close()
        openDevices.remove(deviceId)?.close()
    }

    private fun notifyStateChange() {
        mainHandler.post {
            webView.evaluateJavascript(
                "if(window.__onAndroidMidiPortsChanged){window.__onAndroidMidiPortsChanged();}" +
                "if(window.__androidMidiStateChange){window.__androidMidiStateChange();}",
                null
            )
        }
    }

    /* =========================================================================
     *  Bluetooth LE (BLE) MIDI Management for M-VAVE Chocolate Plus & Controllers
     * ========================================================================= */

    private fun isLocationServiceEnabled(): Boolean {
        val locationManager = getSystemService(Context.LOCATION_SERVICE) as? LocationManager ?: return false
        return if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
            locationManager.isLocationEnabled
        } else {
            locationManager.isProviderEnabled(LocationManager.GPS_PROVIDER) ||
            locationManager.isProviderEnabled(LocationManager.NETWORK_PROVIDER)
        }
    }

    private fun checkPermissionsAndStartBle() {
        val perms = mutableListOf<String>()
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
            if (checkSelfPermission(android.Manifest.permission.BLUETOOTH_SCAN) != PackageManager.PERMISSION_GRANTED) {
                perms.add(android.Manifest.permission.BLUETOOTH_SCAN)
            }
            if (checkSelfPermission(android.Manifest.permission.BLUETOOTH_CONNECT) != PackageManager.PERMISSION_GRANTED) {
                perms.add(android.Manifest.permission.BLUETOOTH_CONNECT)
            }
        }
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            if (checkSelfPermission(android.Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                perms.add(android.Manifest.permission.ACCESS_FINE_LOCATION)
            }
            if (checkSelfPermission(android.Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {
                perms.add(android.Manifest.permission.ACCESS_COARSE_LOCATION)
            }
        }

        if (perms.isNotEmpty()) {
            requestPermissions(perms.toTypedArray(), PERMISSION_REQ_CODE)
        } else {
            if (Build.VERSION.SDK_INT <= Build.VERSION_CODES.R && !isLocationServiceEnabled()) {
                mainHandler.post {
                    Toast.makeText(
                        this,
                        "MIUI / Android 11: Please turn ON Location (GPS) in Quick Settings to connect Bluetooth Footswitch",
                        Toast.LENGTH_LONG
                    ).show()
                }
            }
            startBleMidiDiscovery()
        }
    }

    override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<out String>, grantResults: IntArray) {
        super.onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == PERMISSION_REQ_CODE) {
            startBleMidiDiscovery()
        }
    }

    private fun isPriorityControllerName(name: String): Boolean {
        val lower = name.lowercase()
        return lower.contains("chocolate") ||
               lower.contains("m-vave") ||
               lower.contains("mvave") ||
               lower.contains("sinco") ||
               lower.contains("cuvave") ||
               lower.contains("foot") ||
               lower.contains("switch") ||
               lower.contains("pedal") ||
               lower.contains("cube") ||
               lower.contains("midi") ||
               lower.contains("wireless") ||
               lower.contains("bt-")
    }

    private fun startBleMidiDiscovery() {
        try {
            val btManager = getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager ?: return
            val adapter = btManager.adapter ?: return
            if (!adapter.isEnabled) {
                Log.w("ZoomStageDeck", "Bluetooth is disabled on device")
                return
            }

            // 1. First, check already connected GATT devices
            val connectedGatt = btManager.getConnectedDevices(BluetoothProfile.GATT)
            for (dev in connectedGatt) {
                val name = dev.name ?: ""
                Log.d("ZoomStageDeck", "Checking connected GATT device: $name (${dev.address})")
                if (isPriorityControllerName(name)) {
                    connectBleGatt(dev)
                    return
                }
            }

            // 2. Check bonded (paired) Bluetooth devices
            val bonded = try { adapter.bondedDevices } catch (_: Exception) { null } ?: emptySet()
            
            // Priority 1: Check for device whose name matches known controllers
            var targetDev = bonded.find { isPriorityControllerName(it.name ?: "") }

            // Priority 2: Fallback to any bonded LE/DUAL device that is not Zoom or an audio headset
            if (targetDev == null) {
                targetDev = bonded.find { dev ->
                    val name = (dev.name ?: "").lowercase()
                    val isNotZoom = !name.contains("zoom") && !name.contains("ms-")
                    val isNotAudio = dev.bluetoothClass?.majorDeviceClass != android.bluetooth.BluetoothClass.Device.Major.AUDIO_VIDEO
                    val isLe = dev.type == BluetoothDevice.DEVICE_TYPE_LE || dev.type == BluetoothDevice.DEVICE_TYPE_DUAL || dev.type == BluetoothDevice.DEVICE_TYPE_UNKNOWN
                    isNotZoom && (isNotAudio || isLe)
                }
            }

            // Priority 3: If only one device is bonded to the phone, attempt connection
            if (targetDev == null && bonded.size == 1) {
                targetDev = bonded.first()
            }

            if (targetDev != null) {
                val devName = targetDev.name?.takeIf { it.isNotBlank() } ?: "Bluetooth Controller"
                Log.d("ZoomStageDeck", "Found paired controller to connect: $devName (${targetDev.address})")
                connectBleGatt(targetDev)
                midiManager?.openBluetoothDevice(targetDev, { midiDev ->
                    if (midiDev != null) openMidiDevice(midiDev.info)
                }, mainHandler)
                return
            }

            // 3. Scan for nearby advertising BLE MIDI devices
            val scanner = adapter.bluetoothLeScanner ?: return
            bleScanCallback?.let {
                try { scanner.stopScan(it) } catch (_: Exception) {}
            }

            val callback = object : ScanCallback() {
                override fun onScanResult(callbackType: Int, result: ScanResult?) {
                    val device = result?.device ?: return
                    val record = result.scanRecord
                    val deviceName = result.device.name ?: record?.deviceName ?: ""
                    val uuids = record?.serviceUuids?.map { it.uuid.toString().uppercase() } ?: emptyList()
                    val isMidiService = uuids.any { it.contains("03B80E5A") || it.contains("FFE0") }

                    if (isMidiService || isPriorityControllerName(deviceName)) {
                        Log.d("ZoomStageDeck", "Discovered BLE MIDI candidate: $deviceName (${device.address})")
                        try { scanner.stopScan(this) } catch (_: Exception) {}
                        connectBleGatt(device)
                    }
                }

                override fun onScanFailed(errorCode: Int) {
                    Log.w("ZoomStageDeck", "BLE Scan failed: $errorCode")
                }
            }
            bleScanCallback = callback

            val settings = ScanSettings.Builder()
                .setScanMode(ScanSettings.SCAN_MODE_LOW_LATENCY)
                .build()

            scanner.startScan(null, settings, callback)

            // Stop BLE scan after 20 seconds
            mainHandler.postDelayed({
                try {
                    scanner.stopScan(callback)
                    if (bleScanCallback === callback) bleScanCallback = null
                } catch (_: Exception) {}
            }, 20000)
        } catch (e: Exception) {
            Log.w("ZoomStageDeck", "BLE discovery error: ${e.message}")
        }
    }

    private fun connectBleGatt(device: BluetoothDevice) {
        // Disconnect & close previous GATT instance to prevent getting stuck
        try {
            bleGatt?.disconnect()
            bleGatt?.close()
        } catch (_: Exception) {}
        bleGatt = null
        bleMidiChar = null

        val name = device.name?.takeIf { it.isNotBlank() } ?: "M-VAVE Chocolate"
        bleDeviceName = name
        Log.d("ZoomStageDeck", "Connecting direct BLE GATT to: $name (${device.address})")

        val gattCallback = object : BluetoothGattCallback() {
            override fun onConnectionStateChange(gatt: BluetoothGatt, status: Int, newState: Int) {
                Log.d("ZoomStageDeck", "GATT onConnectionStateChange: status=$status, newState=$newState")
                if (status != BluetoothGatt.GATT_SUCCESS && newState == BluetoothProfile.STATE_DISCONNECTED) {
                    Log.w("ZoomStageDeck", "GATT connection failed with status $status")
                    try { gatt.close() } catch (_: Exception) {}
                    if (bleGatt === gatt) {
                        bleGatt = null
                        bleMidiChar = null
                    }
                    notifyStateChange()
                    return
                }

                if (newState == BluetoothProfile.STATE_CONNECTED) {
                    Log.d("ZoomStageDeck", "GATT connected to $name. Busting cache & discovering services...")
                    // Bust MIUI / Android stale GATT cache before discoverServices
                    try {
                        val refreshMethod = gatt.javaClass.getMethod("refresh")
                        refreshMethod.invoke(gatt)
                    } catch (_: Exception) {}

                    // Delay discoverServices slightly (250ms) to ensure connection stability on MIUI/Android 11
                    mainHandler.postDelayed({
                        val success = gatt.discoverServices()
                        Log.d("ZoomStageDeck", "discoverServices initiated: $success")
                    }, 250)
                } else if (newState == BluetoothProfile.STATE_DISCONNECTED) {
                    Log.d("ZoomStageDeck", "GATT disconnected from $name")
                    try { gatt.close() } catch (_: Exception) {}
                    if (bleGatt === gatt) {
                        bleGatt = null
                        bleMidiChar = null
                    }
                    notifyStateChange()
                }
            }

            override fun onServicesDiscovered(gatt: BluetoothGatt, status: Int) {
                if (status == BluetoothGatt.GATT_SUCCESS) {
                    Log.d("ZoomStageDeck", "GATT Services discovered (${gatt.services.size} services)")
                    var foundChar: BluetoothGattCharacteristic? = null

                    // 1. Search for standard BLE MIDI service (03B80E5A-EDE8-4B33-A751-6CE34EC4C700)
                    for (service in gatt.services) {
                        val sUuid = service.uuid.toString().uppercase()
                        Log.d("ZoomStageDeck", "Found Service: $sUuid")
                        if (sUuid.contains("03B80E5A")) {
                            for (ch in service.characteristics) {
                                val cUuid = ch.uuid.toString().uppercase()
                                Log.d("ZoomStageDeck", "  Char in MIDI svc: $cUuid, props=${ch.properties}")
                                if (cUuid.contains("7772E5DB") || (ch.properties and BluetoothGattCharacteristic.PROPERTY_NOTIFY != 0)) {
                                    foundChar = ch
                                    break
                                }
                            }
                        }
                        if (foundChar != null) break
                    }

                    // 2. Fallback: Search for characteristic with UUID 7772E5DB in ANY service
                    if (foundChar == null) {
                        for (service in gatt.services) {
                            for (ch in service.characteristics) {
                                if (ch.uuid.toString().uppercase().contains("7772E5DB")) {
                                    foundChar = ch
                                    break
                                }
                            }
                            if (foundChar != null) break
                        }
                    }

                    // 3. Fallback: Search for M-VAVE custom / FFE0 / FFE1 characteristic
                    if (foundChar == null) {
                        for (service in gatt.services) {
                            val sUuid = service.uuid.toString().uppercase()
                            if (sUuid.contains("FFE0")) {
                                for (ch in service.characteristics) {
                                    if (ch.uuid.toString().uppercase().contains("FFE1")) {
                                        foundChar = ch
                                        break
                                    }
                                }
                            }
                            if (foundChar != null) break
                        }
                    }

                    // 4. Fallback: Any non-standard characteristic with NOTIFY
                    if (foundChar == null) {
                        for (service in gatt.services) {
                            val sUuid = service.uuid.toString().uppercase()
                            if (!sUuid.startsWith("0000180") && !sUuid.startsWith("0000181")) {
                                for (ch in service.characteristics) {
                                    if ((ch.properties and BluetoothGattCharacteristic.PROPERTY_NOTIFY) != 0) {
                                        foundChar = ch
                                        break
                                    }
                                }
                            }
                            if (foundChar != null) break
                        }
                    }

                    if (foundChar != null) {
                        bleMidiChar = foundChar
                        bleGatt = gatt
                        Log.d("ZoomStageDeck", "Found Controller Characteristic: ${foundChar.uuid} on $name")

                        gatt.setCharacteristicNotification(foundChar, true)

                        val cccd = foundChar.getDescriptor(CLIENT_CONFIG_DESCRIPTOR_UUID)
                        if (cccd != null) {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                                gatt.writeDescriptor(cccd, BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE)
                            } else {
                                @Suppress("DEPRECATION")
                                cccd.value = BluetoothGattDescriptor.ENABLE_NOTIFICATION_VALUE
                                @Suppress("DEPRECATION")
                                gatt.writeDescriptor(cccd)
                            }
                        }

                        Log.d("ZoomStageDeck", "BLE MIDI Connected and Ready: $name")
                        mainHandler.post {
                            Toast.makeText(this@MainActivity, "Connected: $name", Toast.LENGTH_SHORT).show()
                        }
                        notifyStateChange()
                    } else {
                        Log.w("ZoomStageDeck", "No compatible MIDI/Notification characteristic found on $name")
                        try { gatt.close() } catch (_: Exception) {}
                        bleGatt = null
                        bleMidiChar = null
                        notifyStateChange()
                    }
                }
            }

            override fun onDescriptorWrite(gatt: BluetoothGatt, descriptor: BluetoothGattDescriptor, status: Int) {
                Log.d("ZoomStageDeck", "CCCD descriptor write status: $status")
                notifyStateChange()
            }

            override fun onCharacteristicChanged(gatt: BluetoothGatt, characteristic: BluetoothGattCharacteristic) {
                @Suppress("DEPRECATION")
                val data = characteristic.value ?: return
                handleBleMidiBytes(data)
            }

            override fun onCharacteristicChanged(gatt: BluetoothGatt, characteristic: BluetoothGattCharacteristic, value: ByteArray) {
                handleBleMidiBytes(value)
            }
        }

        bleGatt = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M) {
            device.connectGatt(this, false, gattCallback, BluetoothDevice.TRANSPORT_LE)
        } else {
            device.connectGatt(this, false, gattCallback)
        }
    }

    private fun handleBleMidiBytes(data: ByteArray) {
        val parsed = parseBleMidi(data)
        // If standard MMA BLE MIDI parser extracted packets, use them;
        // Otherwise, if raw MIDI byte (status >= 0x80), fall back to raw message
        val messages = if (parsed.isNotEmpty()) {
            parsed
        } else if (data.isNotEmpty() && (data[0].toInt() and 0x80) != 0) {
            listOf(data)
        } else {
            emptyList()
        }

        for (msg in messages) {
            val hex = bytesToHex(msg, 0, msg.size)
            val jsonBytes = JSONArray()
            for (b in msg) {
                jsonBytes.put(b.toInt() and 0xFF)
            }
            Log.d("ZoomStageDeck", "BLE Controller RX: $hex")
            mainHandler.post {
                webView.evaluateJavascript(
                    "if(window.__onAndroidMidi){window.__onAndroidMidi('controller', '$hex');}" +
                    "if(window.__androidMidiReceive){window.__androidMidiReceive('ble_controller', $jsonBytes);}",
                    null
                )
            }
        }
    }

    private fun parseBleMidi(packet: ByteArray): List<ByteArray> {
        if (packet.size < 2) return emptyList()
        val result = mutableListOf<ByteArray>()
        var i = 1 // skip header timestamp high at packet[0]
        var runningStatus = 0

        while (i < packet.size) {
            val b = packet[i].toInt() and 0xFF

            // Case 1: timestamp low byte followed by a MIDI status byte
            if (b >= 0x80 && (i + 1 < packet.size) && (packet[i + 1].toInt() and 0xFF) >= 0x80) {
                i++
                continue
            }

            // Case 2: timestamp low byte followed by running status data
            if (b >= 0x80 && runningStatus != 0 && (i + 1 < packet.size) && (packet[i + 1].toInt() and 0x80) == 0) {
                i++
                val status = runningStatus
                val channel = status and 0xF0
                val dataLen = if (channel == 0xC0 || channel == 0xD0) 1 else 2
                val msg = ByteArray(1 + dataLen)
                msg[0] = status.toByte()
                var ok = true
                for (d in 1..dataLen) {
                    if (i < packet.size && (packet[i].toInt() and 0x80) == 0) {
                        msg[d] = packet[i]
                        i++
                    } else {
                        ok = false
                        break
                    }
                }
                if (ok) result.add(msg)
                continue
            }

            // Case 3: Channel voice message (CC, PC, Note, etc.)
            if (b in 0x80..0xEF) {
                val status = b
                val channel = status and 0xF0
                runningStatus = status
                val dataLen = if (channel == 0xC0 || channel == 0xD0) 1 else 2
                val msg = ByteArray(1 + dataLen)
                msg[0] = status.toByte()
                i++
                var ok = true
                for (d in 1..dataLen) {
                    if (i < packet.size && (packet[i].toInt() and 0x80) == 0) {
                        msg[d] = packet[i]
                        i++
                    } else {
                        ok = false
                        break
                    }
                }
                if (ok) result.add(msg)
                continue
            }

            // Case 4: SysEx start (0xF0)
            if (b == 0xF0) {
                val sysex = mutableListOf<Byte>()
                sysex.add(0xF0.toByte())
                i++
                while (i < packet.size) {
                    val sb = packet[i].toInt() and 0xFF
                    if (sb == 0xF7) {
                        sysex.add(0xF7.toByte())
                        i++
                        break
                    } else if (sb < 0x80) {
                        sysex.add(sb.toByte())
                    }
                    i++
                }
                result.add(sysex.toByteArray())
                continue
            }

            // Case 5: Real-time (0xF8..0xFF)
            if (b >= 0xF8) {
                result.add(byteArrayOf(b.toByte()))
                i++
                continue
            }

            i++
        }
        return result
    }

    private fun sendMidiBytesToBle(bytes: ByteArray) {
        val gatt = bleGatt ?: return
        val ch = bleMidiChar ?: return
        try {
            val packet = ByteArray(2 + bytes.size)
            packet[0] = 0x80.toByte()
            packet[1] = 0x80.toByte()
            System.arraycopy(bytes, 0, packet, 2, bytes.size)

            val writeType = if ((ch.properties and BluetoothGattCharacteristic.PROPERTY_WRITE_NO_RESPONSE) != 0) {
                BluetoothGattCharacteristic.WRITE_TYPE_NO_RESPONSE
            } else {
                BluetoothGattCharacteristic.WRITE_TYPE_DEFAULT
            }

            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                gatt.writeCharacteristic(ch, packet, writeType)
            } else {
                @Suppress("DEPRECATION")
                ch.value = packet
                ch.writeType = writeType
                @Suppress("DEPRECATION")
                gatt.writeCharacteristic(ch)
            }
        } catch (e: Exception) {
            Log.e("ZoomStageDeck", "sendMidiBytesToBle error", e)
        }
    }

    inner class AndroidMidiBridge {
        @JavascriptInterface
        fun listPorts(): String {
            val root = JSONObject()
            val inArr = JSONArray()
            val outArr = JSONArray()

            val btManager = getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager
            val adapter = btManager?.adapter

            // 1. Include BLE MIDI Controller if connected
            if (bleGatt != null && bleMidiChar != null) {
                val bleIn = JSONObject()
                bleIn.put("id", "ble_controller")
                bleIn.put("name", "$bleDeviceName (Connected Bluetooth)")
                inArr.put(bleIn)

                val bleOut = JSONObject()
                bleOut.put("id", "ble_controller")
                bleOut.put("name", "$bleDeviceName (Connected Bluetooth)")
                outArr.put(bleOut)
            }

            // Only list relevant MIDI footswitches / controllers so user is not cluttered with headphones or cars
            val bonded = try { adapter?.bondedDevices } catch (_: Exception) { null }
            if (bonded != null) {
                for (dev in bonded) {
                    val rawName = dev.name ?: ""
                    val lower = rawName.lowercase()
                    // Don't duplicate Zoom if it's over USB
                    if (lower.contains("zoom") || lower.contains("ms-50") || lower.contains("ms-60") || lower.contains("ms-70")) {
                        continue
                    }
                    val isConnectedNow = (bleGatt?.device?.address == dev.address && bleMidiChar != null)
                    if (isConnectedNow) continue // Already added as ble_controller above

                    // Filter out non-MIDI audio accessories (headphones, car audio, speakers)
                    if (!isPriorityControllerName(rawName)) {
                        continue
                    }

                    val displayName = if (rawName.isNotBlank()) rawName else "Bluetooth Footswitch"
                    val label = "$displayName (${dev.address})"

                    val bleIn = JSONObject()
                    bleIn.put("id", "ble_${dev.address}")
                    bleIn.put("name", label)
                    inArr.put(bleIn)

                    val bleOut = JSONObject()
                    bleOut.put("id", "ble_${dev.address}")
                    bleOut.put("name", label)
                    outArr.put(bleOut)
                }
            }

            // 2. Include native USB / MidiManager devices
            val devices = midiManager?.devices ?: emptyArray()
            for (info in devices) {
                if (!openDevices.containsKey(info.id)) {
                    openMidiDevice(info)
                }
                val devName = getDeviceName(info)
                val idStr = info.id.toString()

                // Web MIDI Input = Android Output (Device -> App)
                if (info.outputPortCount > 0 || (info.outputPortCount == 0 && info.inputPortCount == 0)) {
                    val item = JSONObject()
                    item.put("id", idStr)
                    item.put("name", devName)
                    inArr.put(item)
                }

                // Web MIDI Output = Android Input (App -> Device)
                if (info.inputPortCount > 0 || (info.outputPortCount == 0 && info.inputPortCount == 0)) {
                    val item = JSONObject()
                    item.put("id", idStr)
                    item.put("name", devName)
                    outArr.put(item)
                }
            }

            root.put("inputs", inArr)
            root.put("outputs", outArr)
            return root.toString()
        }

        @JavascriptInterface
        fun selectZoomOutput(id: String) {
            selectedZoomOutputId = id
            id.toIntOrNull()?.let { devId ->
                midiManager?.devices?.find { it.id == devId }?.let { openMidiDevice(it) }
            }
        }

        @JavascriptInterface
        fun selectZoomInput(id: String) {
            selectedZoomInputId = id
            id.toIntOrNull()?.let { devId ->
                midiManager?.devices?.find { it.id == devId }?.let { openMidiDevice(it) }
            }
        }

        @JavascriptInterface
        fun selectControllerInput(id: String) {
            selectedControllerInputId = id
            selectedControllerOutputId = id
            if (id.startsWith("ble_")) {
                val mac = id.removePrefix("ble_")
                if (mac.length >= 12 && mac != "controller") {
                    try {
                        val btManager = getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager
                        val adapter = btManager?.adapter
                        val dev = adapter?.getRemoteDevice(mac)
                        if (dev != null) {
                            Log.d("ZoomStageDeck", "User selected Bluetooth controller: $mac")
                            mainHandler.post { connectBleGatt(dev) }
                        }
                    } catch (e: Exception) {
                        Log.e("ZoomStageDeck", "Error connecting to remote BLE device $mac", e)
                    }
                } else {
                    mainHandler.post { checkPermissionsAndStartBle() }
                }
                return
            }
            id.toIntOrNull()?.let { devId ->
                midiManager?.devices?.find { it.id == devId }?.let { openMidiDevice(it) }
            }
        }

        @JavascriptInterface
        fun sendZoomHex(hex: String) {
            try {
                val bytes = hexToBytes(hex)
                var sent = false
                val devId = selectedZoomOutputId.toIntOrNull()
                if (devId != null) {
                    val port = inputPorts[devId]
                    if (port != null) {
                        port.send(bytes, 0, bytes.size)
                        sent = true
                    }
                }
                if (!sent) {
                    for ((id, port) in inputPorts) {
                        val dev = openDevices[id]
                        val name = dev?.info?.let { getDeviceName(it) } ?: ""
                        if (name.contains("zoom", ignoreCase = true) || name.contains("ms-", ignoreCase = true)) {
                            port.send(bytes, 0, bytes.size)
                            sent = true
                            break
                        }
                    }
                }
                if (!sent && inputPorts.isNotEmpty()) {
                    inputPorts.values.firstOrNull()?.send(bytes, 0, bytes.size)
                }
            } catch (e: Exception) {
                Log.e("ZoomStageDeck", "sendZoomHex error", e)
            }
        }

        @JavascriptInterface
        fun sendControllerHex(hex: String) {
            try {
                val bytes = hexToBytes(hex)
                if (selectedControllerOutputId.startsWith("ble_") || (bleGatt != null && bleMidiChar != null)) {
                    sendMidiBytesToBle(bytes)
                    return
                }

                val devId = selectedControllerOutputId.toIntOrNull() ?: selectedControllerInputId.toIntOrNull()
                if (devId != null) {
                    inputPorts[devId]?.send(bytes, 0, bytes.size)
                } else {
                    for ((id, port) in inputPorts) {
                        val dev = openDevices[id]
                        val name = dev?.info?.let { getDeviceName(it) } ?: ""
                        if (!name.contains("zoom", ignoreCase = true)) {
                            port.send(bytes, 0, bytes.size)
                            break
                        }
                    }
                }
            } catch (e: Exception) {
                Log.e("ZoomStageDeck", "sendControllerHex error", e)
            }
        }

        @JavascriptInterface
        fun sendPortHex(portIdStr: String, hex: String) {
            try {
                val bytes = hexToBytes(hex)
                if (portIdStr.startsWith("ble_")) {
                    sendMidiBytesToBle(bytes)
                    return
                }
                val devId = portIdStr.toIntOrNull() ?: return
                inputPorts[devId]?.send(bytes, 0, bytes.size)
            } catch (e: Exception) {
                Log.e("ZoomStageDeck", "sendPortHex error", e)
            }
        }

        @JavascriptInterface
        fun scanBleDevices() {
            mainHandler.post {
                try {
                    bleGatt?.disconnect()
                    bleGatt?.close()
                } catch (_: Exception) {}
                bleGatt = null
                bleMidiChar = null
                checkPermissionsAndStartBle()
            }
        }

        @JavascriptInterface
        fun getDevices(): String {
            val arr = JSONArray()
            if (bleGatt != null && bleMidiChar != null) {
                val ble = JSONObject()
                ble.put("id", "ble_controller")
                ble.put("name", "$bleDeviceName (Bluetooth)")
                ble.put("hasInput", true)
                ble.put("hasOutput", true)
                arr.put(ble)
            }
            val devices = midiManager?.devices ?: return arr.toString()
            for (info in devices) {
                val obj = JSONObject()
                obj.put("id", info.id.toString())
                obj.put("name", getDeviceName(info))
                obj.put("hasInput", info.inputPortCount > 0)
                obj.put("hasOutput", info.outputPortCount > 0)
                arr.put(obj)
            }
            return arr.toString()
        }

        @JavascriptInterface
        fun sendMidi(deviceIdStr: String, bytesJson: String) {
            try {
                val jsonArr = JSONArray(bytesJson)
                val bytes = ByteArray(jsonArr.length())
                for (i in 0 until jsonArr.length()) {
                    bytes[i] = (jsonArr.getInt(i) and 0xFF).toByte()
                }
                if (deviceIdStr.startsWith("ble_")) {
                    sendMidiBytesToBle(bytes)
                    return
                }
                val devId = deviceIdStr.toIntOrNull() ?: return
                val port = inputPorts[devId] ?: return
                port.send(bytes, 0, bytes.size)
            } catch (e: Exception) {
                Log.e("ZoomStageDeck", "sendMidi error", e)
            }
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        bleScanCallback?.let {
            try {
                val btManager = getSystemService(Context.BLUETOOTH_SERVICE) as? BluetoothManager
                btManager?.adapter?.bluetoothLeScanner?.stopScan(it)
            } catch (_: Exception) {}
        }
        try {
            bleGatt?.close()
        } catch (_: Exception) {}
        bleGatt = null
        bleMidiChar = null

        for (port in outputPorts.values) {
            try { port.close() } catch (_: Exception) {}
        }
        for (port in inputPorts.values) {
            try { port.close() } catch (_: Exception) {}
        }
        for (dev in openDevices.values) {
            try { dev.close() } catch (_: Exception) {}
        }
        openDevices.clear()
        inputPorts.clear()
        outputPorts.clear()
    }
}
