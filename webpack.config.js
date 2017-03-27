/*eslint-env node */
var path = require('path');
var options = require('./webpack.base.js');
options.entry = './index';
options.output = {
  library: 'G2Vue',
  libraryTarget: 'umd',
  filename: 'g2-vue.js',
  path: path.resolve('./lib')
};
options.externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
};
module.exports = options;