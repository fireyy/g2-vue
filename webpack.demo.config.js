/*eslint-env node */
var options = require('./webpack.base.js');
options.entry = './demo';
options.output = {
  filename: './demo/dist/build.js',
  publicPath: '/'
};
module.exports = options;
