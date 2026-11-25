@echo off
title Zoom Stage Deck - Local Server (http://localhost:8767)
cd /d "%~dp0"

echo Starting Zoom Stage Deck at http://localhost:8767 ...
echo Keep this window open while using the app. Press Ctrl+C to stop.
echo.

start "" "http://localhost:8767"

where python >nul 2>nul
if %errorlevel%==0 (
  python -m http.server 8767
  goto :eof
)

where py >nul 2>nul
if %errorlevel%==0 (
  py -m http.server 8767
  goto :eof
)

where npx >nul 2>nul
if %errorlevel%==0 (
  npx --yes serve -l 8767 .
  goto :eof
)

echo ERROR: Neither Python nor Node.js (npx) was found on this laptop.
echo Install Python from https://www.python.org/downloads/ (check "Add Python to PATH") and run this again.
pause
