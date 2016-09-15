const electorn = require('electron');
const { Sample } = require('./samples');

electorn.app.on('ready', () => {
  Sample.createWindow();
  Sample.shortcut();
});
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
