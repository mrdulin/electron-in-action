require('./env');
const electorn = require('electron');
const { Sample } = require('./samples');

let win;
electorn.app.on('ready', () => {
  win = Sample.createWindow();
  Sample.globalShortcut.register('Command + V', () => {
    Sample.clipboard.readImage();
  });
});
electorn.app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    electorn.app.quit();
  }
});

electorn.app.on('activate', () => {
  if (win === null) {
    Sample.createWindow();
  }
});
