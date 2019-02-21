const electorn = require('electron');
const path = require('path');

function createWindow() {
  let win = new electorn.BrowserWindow({ width: 800, height: 600 });
  win.loadFile(path.resolve(__dirname, '../../index.html'));
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
  return win;
}

module.exports = createWindow;
