const { globalShortcut } = require('electron');

function shortcut() {
  globalShortcut.register('Command+C', copyHandler);
}

function copyHandler() {
  console.log('Command + C pressed');
}

module.exports = shortcut;
