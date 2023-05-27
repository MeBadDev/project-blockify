const path = require('path');

module.exports = {
  entry: './blockify-main/pages/scripts/editor.js',
  output: {
    filename: 'editor.js',
    path: path.resolve(__dirname, './blockify-main/pages/dist'),
  },
};
