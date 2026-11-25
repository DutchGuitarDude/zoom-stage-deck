const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  toggleFullScreen: () => ipcRenderer.send('toggle-fullscreen'),
  setFullScreen: (flag) => ipcRenderer.send('set-fullscreen', flag),
  isFullScreen: () => ipcRenderer.invoke('is-fullscreen'),
  onFullScreenChange: (callback) => {
    ipcRenderer.on('fullscreen-change', (_event, isFs) => callback(isFs));
  },
});
