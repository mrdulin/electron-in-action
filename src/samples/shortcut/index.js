const { globalShortcut } = require('electron');

const GlobalShortcut = {
  register(accelerator, callback) {
    globalShortcut.register(accelerator, callback);
  }
};

module.exports = GlobalShortcut;
