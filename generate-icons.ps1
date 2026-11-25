Add-Type -AssemblyName System.Drawing

$srcPath = Join-Path $PSScriptRoot "assets\icon.png"
if (-not (Test-Path $srcPath)) {
    Write-Error "assets\icon.png not found"
    exit 1
}

$srcBmp = [System.Drawing.Bitmap]::FromFile($srcPath)

function Resize-Image($source, $width, $height) {
    $dest = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    $g.DrawImage($source, 0, 0, $width, $height)
    $g.Dispose()
    return $dest
}

function Create-LauncherForeground($source, $size) {
    # In adaptive icons, canvas is $size x $size, but the active icon should occupy ~66% (safe zone)
    $dest = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)
    
    $iconSize = [int]($size * 0.70)
    $offset = [int](($size - $iconSize) / 2)
    $g.DrawImage($source, $offset, $offset, $iconSize, $iconSize)
    $g.Dispose()
    return $dest
}

function Create-LauncherRound($source, $size) {
    $dest = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Draw dark rounded background circle
    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 10, 14, 23))
    $g.FillEllipse($brush, 0, 0, $size, $size)
    $brush.Dispose()

    # Draw golden accent border ring
    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 245, 184, 46), [Math]::Max(1, [int]($size * 0.03)))
    $g.DrawEllipse($pen, 1, 1, $size - 2, $size - 2)
    $pen.Dispose()

    # Draw stomp pedal centered
    $iconSize = [int]($size * 0.74)
    $offset = [int](($size - $iconSize) / 2)
    $g.DrawImage($source, $offset, $offset, $iconSize, $iconSize)
    $g.Dispose()
    return $dest
}

function Create-LauncherSquare($source, $size) {
    $dest = New-Object System.Drawing.Bitmap($size, $size, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($dest)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $g.Clear([System.Drawing.Color]::Transparent)

    # Dark rounded chassis rectangle
    $radius = [int]($size * 0.20)
    $rect = New-Object System.Drawing.Rectangle(0, 0, $size, $size)
    $path = New-Object System.Drawing.Drawing2D.GraphicsPath
    $diameter = $radius * 2
    $path.AddArc(0, 0, $diameter, $diameter, 180, 90)
    $path.AddArc($size - $diameter, 0, $diameter, $diameter, 270, 90)
    $path.AddArc($size - $diameter, $size - $diameter, $diameter, $diameter, 0, 90)
    $path.AddArc(0, $size - $diameter, $diameter, $diameter, 90, 90)
    $path.CloseFigure()

    $brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(255, 10, 14, 23))
    $g.FillPath($brush, $path)
    $brush.Dispose()

    $pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(255, 245, 184, 46), [Math]::Max(1, [int]($size * 0.03)))
    $g.DrawPath($pen, $path)
    $pen.Dispose()
    $path.Dispose()

    # Draw pedal centered
    $iconSize = [int]($size * 0.78)
    $offset = [int](($size - $iconSize) / 2)
    $g.DrawImage($source, $offset, $offset, $iconSize, $iconSize)
    $g.Dispose()
    return $dest
}

$densities = @{
    "mipmap-mdpi"    = @{ icon = 48;  fg = 108 }
    "mipmap-hdpi"    = @{ icon = 72;  fg = 162 }
    "mipmap-xhdpi"   = @{ icon = 96;  fg = 216 }
    "mipmap-xxhdpi"  = @{ icon = 144; fg = 324 }
    "mipmap-xxxhdpi" = @{ icon = 192; fg = 432 }
}

$resBase = Join-Path $PSScriptRoot "android-app\app\src\main\res"

foreach ($folder in $densities.Keys) {
    $dir = Join-Path $resBase $folder
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir | Out-Null
    }

    $sizes = $densities[$folder]
    
    # 1. Square launcher icon
    $sq = Create-LauncherSquare $srcBmp $sizes.icon
    $sq.Save((Join-Path $dir "ic_launcher.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $sq.Dispose()

    # 2. Round launcher icon
    $rd = Create-LauncherRound $srcBmp $sizes.icon
    $rd.Save((Join-Path $dir "ic_launcher_round.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $rd.Dispose()

    # 3. Foreground adaptive icon
    $fg = Create-LauncherForeground $srcBmp $sizes.fg
    $fg.Save((Join-Path $dir "ic_launcher_foreground.png"), [System.Drawing.Imaging.ImageFormat]::Png)
    $fg.Dispose()

    Write-Host "Generated icons for $folder ($($sizes.icon)px, fg: $($sizes.fg)px)"
}

$srcBmp.Dispose()
Write-Host "Android app icons successfully updated!"
