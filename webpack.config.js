'use strict';

module.exports = {
  entry: './wasm-router.js',
  output: {
    filename: 'wasm-router.js',
    library: 'wasmRouter',
    libraryTarget: 'umd',
    path: __dirname + '/dist'
  },
  externals: [
    'fs',
    './fetchwasm-node.js'
  ]
};
