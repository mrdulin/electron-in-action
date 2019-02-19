const electorn = require('electron');
const path = require('path');

function createWindow() {
  let win = new electorn.BrowserWindow({ width: 800, height: 600 });
  win.loadFile(path.resolve(__dirname, './index.html'));
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

electorn.app.on('ready', createWindow);
electorn.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electorn.app.quit();
  }
});

electorn.app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
