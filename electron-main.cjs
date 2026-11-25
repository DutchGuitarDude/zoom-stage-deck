const { app, BrowserWindow, session, Menu, ipcMain } = require('electron');
const path = require('path');
const http = require('http');
const fs = require('fs');

let server = null;
let mainWindow = null;
let serverPort = 8767;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
};

function startLocalServer(baseDir) {
  return new Promise((resolve) => {
    server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      if (reqPath === '/' || reqPath === '') reqPath = '/index.html';

      const filePath = path.normalize(path.join(baseDir, reqPath));

      // Security check: ensure path stays within baseDir
      if (!filePath.startsWith(baseDir)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      fs.stat(filePath, (err, stats) => {
        if (err || !stats.isFile()) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('404 Not Found');
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        const contentType = MIME_TYPES[ext] || 'application/octet-stream';

        res.writeHead(200, {
          'Content-Type': contentType,
          'Cache-Control': 'no-cache',
          'Access-Control-Allow-Origin': '*',
        });

        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
      });
    });

    server.listen(serverPort, '127.0.0.1', () => {
      resolve(serverPort);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // Try next port if 8767 is occupied
        serverPort++;
        server.listen(serverPort, '127.0.0.1');
      }
    });
  });
}

async function createWindow() {
  const baseDir = __dirname;
  await startLocalServer(baseDir);

  mainWindow = new BrowserWindow({
    width: 1440,
    height: 880,
    minWidth: 1024,
    minHeight: 680,
    title: 'Zoom Stage Deck — Visual Pedalboard',
    backgroundColor: '#0a0e17',
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
    },
  });

  // Automatically allow Web MIDI and SysEx permissions for Zoom MultiStomp & Chocolate Plus
  session.defaultSession.setPermissionCheckHandler((webContents, permission) => {
    if (permission === 'midi' || permission === 'midiSysex') {
      return true;
    }
    return false;
  });

  session.defaultSession.setPermissionRequestHandler((webContents, permission, callback) => {
    if (permission === 'midi' || permission === 'midiSysex') {
      return callback(true);
    }
    return callback(false);
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Fullscreen IPC handlers & event relays
  ipcMain.on('toggle-fullscreen', () => {
    if (mainWindow) {
      mainWindow.setFullScreen(!mainWindow.isFullScreen());
    }
  });

  ipcMain.on('set-fullscreen', (_event, flag) => {
    if (mainWindow) {
      mainWindow.setFullScreen(Boolean(flag));
    }
  });

  ipcMain.handle('is-fullscreen', () => {
    return mainWindow ? mainWindow.isFullScreen() : false;
  });

  mainWindow.on('enter-full-screen', () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('fullscreen-change', true);
    }
  });

  mainWindow.on('leave-full-screen', () => {
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send('fullscreen-change', false);
    }
  });

  mainWindow.webContents.on('enter-html-full-screen', () => {
    mainWindow.setFullScreen(true);
  });

  mainWindow.webContents.on('leave-html-full-screen', () => {
    mainWindow.setFullScreen(false);
  });

  // Enable F11 fullscreen toggle for stage mode
  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F11' && input.type === 'keyDown') {
      mainWindow.setFullScreen(!mainWindow.isFullScreen());
      event.preventDefault();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  await mainWindow.loadURL(`http://127.0.0.1:${serverPort}/index.html`);
}

// Single instance lock
const gotTheLock = app.requestSingleInstanceLock();

if (!gotTheLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(createWindow);

  app.on('window-all-closed', () => {
    if (server) {
      server.close();
    }
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}
