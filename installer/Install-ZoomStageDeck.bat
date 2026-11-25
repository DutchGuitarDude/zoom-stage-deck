@echo off
setlocal EnableDelayedExpansion
title Installing Zoom Stage Deck...

echo ======================================================
echo           Zoom Stage Deck - Windows Installer
echo ======================================================
echo.

set "INSTALL_DIR=%LOCALAPPDATA%\ZoomStageDeck"
set "SOURCE_DIR=%~dp0.."

echo [1/4] Preparing installation directory...
if not exist "%INSTALL_DIR%" mkdir "%INSTALL_DIR%"
if not exist "%INSTALL_DIR%\assets" mkdir "%INSTALL_DIR%\assets"
if not exist "%INSTALL_DIR%\src" mkdir "%INSTALL_DIR%\src"

echo [2/4] Copying application files...
copy /y "%SOURCE_DIR%\index.html" "%INSTALL_DIR%\" >nul
copy /y "%SOURCE_DIR%\styles.css" "%INSTALL_DIR%\" >nul
copy /y "%SOURCE_DIR%\package.json" "%INSTALL_DIR%\" >nul 2>nul
copy /y "%SOURCE_DIR%\electron-main.cjs" "%INSTALL_DIR%\" >nul 2>nul

xcopy /e /i /y "%SOURCE_DIR%\src" "%INSTALL_DIR%\src" >nul
xcopy /e /i /y "%SOURCE_DIR%\assets" "%INSTALL_DIR%\assets" >nul

echo [3/4] Creating silent launcher and server...

:: Create local HTTP server launcher script (Node or Python or Npx)
(
echo @echo off
echo cd /d "%INSTALL_DIR%"
echo where node >nul 2>nul
echo if %%errorlevel%%==0 (
echo   node -e "const http=require('http'),fs=require('fs'),path=require('path');const m={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.ico':'image/x-icon','.svg':'image/svg+xml'};http.createServer((q,s)=>{let p=q.url.split('?')[0];if(p==='/'||!p)p='/index.html';let f=path.join('%INSTALL_DIR%',p);fs.readFile(f,(e,d)=>{if(e){s.writeHead(404);return s.end();}s.writeHead(200,{'Content-Type':m[path.extname(f)]||'text/plain'});s.end(d);});}).listen(8767,'127.0.0.1');"
echo   goto :eof
echo )
echo where python >nul 2>nul
echo if %%errorlevel%%==0 (
echo   python -m http.server 8767 --bind 127.0.0.1
echo   goto :eof
echo )
) > "%INSTALL_DIR%\server.bat"

:: Locate Edge or Chrome for dedicated App Mode window
set "BROWSER_EXE="
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  set "BROWSER_EXE=%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
) else if exist "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe" (
  set "BROWSER_EXE=%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
) else if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  set "BROWSER_EXE=%ProgramFiles%\Google\Chrome\Application\chrome.exe"
) else if exist "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe" (
  set "BROWSER_EXE=%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
)

:: Create VBS launcher that runs completely silently (zero console window)
(
echo Set WshShell = CreateObject("WScript.Shell"^)
echo WshShell.Run "cmd /c """ & "%INSTALL_DIR%\server.bat" & """", 0, False
echo WScript.Sleep 600
if defined BROWSER_EXE (
  echo WshShell.Run """%BROWSER_EXE%"" --app=http://localhost:8767 --enable-web-midi --start-maximized", 1, False
) else (
  echo WshShell.Run "http://localhost:8767", 1, False
)
) > "%INSTALL_DIR%\ZoomStageDeck.vbs"

echo [4/4] Creating Desktop and Start Menu shortcuts...

set "DESKTOP_DIR=%USERPROFILE%\Desktop"
set "START_MENU_DIR=%APPDATA%\Microsoft\Windows\Start Menu\Programs\Zoom Stage Deck"
if not exist "%START_MENU_DIR%" mkdir "%START_MENU_DIR%"

:: Use PowerShell to create .lnk shortcuts with icon
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ws = New-Object -ComObject WScript.Shell; " ^
  "$sc1 = $ws.CreateShortcut('%DESKTOP_DIR%\Zoom Stage Deck.lnk'); " ^
  "$sc1.TargetPath = 'wscript.exe'; " ^
  "$sc1.Arguments = '\"%INSTALL_DIR%\ZoomStageDeck.vbs\"'; " ^
  "$sc1.WorkingDirectory = '%INSTALL_DIR%'; " ^
  "$sc1.IconLocation = '%INSTALL_DIR%\assets\icon.ico,0'; " ^
  "$sc1.Description = 'Zoom Stage Deck - Visual Pedalboard & Scene Controller'; " ^
  "$sc1.Save(); " ^
  "$sc2 = $ws.CreateShortcut('%START_MENU_DIR%\Zoom Stage Deck.lnk'); " ^
  "$sc2.TargetPath = 'wscript.exe'; " ^
  "$sc2.Arguments = '\"%INSTALL_DIR%\ZoomStageDeck.vbs\"'; " ^
  "$sc2.WorkingDirectory = '%INSTALL_DIR%'; " ^
  "$sc2.IconLocation = '%INSTALL_DIR%\assets\icon.ico,0'; " ^
  "$sc2.Description = 'Zoom Stage Deck - Visual Pedalboard & Scene Controller'; " ^
  "$sc2.Save();"

:: Create Uninstaller
(
echo @echo off
echo title Uninstalling Zoom Stage Deck...
echo Removing shortcuts...
echo del /f /q "%DESKTOP_DIR%\Zoom Stage Deck.lnk" 2^>nul
echo rmdir /s /q "%START_MENU_DIR%" 2^>nul
echo echo Removing files...
echo rmdir /s /q "%INSTALL_DIR%" 2^>nul
echo echo.
echo echo Zoom Stage Deck has been uninstalled successfully.
echo pause
) > "%INSTALL_DIR%\Uninstall-ZoomStageDeck.bat"

copy /y "%INSTALL_DIR%\Uninstall-ZoomStageDeck.bat" "%START_MENU_DIR%\Uninstall Zoom Stage Deck.bat" >nul

echo.
echo ======================================================
echo         Zoom Stage Deck Installed Successfully!
echo ======================================================
echo.
echo   [+] Location: %INSTALL_DIR%
echo   [+] Desktop Shortcut: "Zoom Stage Deck"
echo   [+] Start Menu: Programs ^> Zoom Stage Deck
echo   [+] Dedicated stage window with Web MIDI enabled!
echo.
echo Launching Zoom Stage Deck now...
start "" wscript.exe "%INSTALL_DIR%\ZoomStageDeck.vbs"
echo.
pause
