'use strict';

if (typeof fetch === 'function'){
  // use browser
  module.exports = require('./fetchwasm-browser.js');
} else {
  // use node
  module.exports = require('./fetchwasm-node.js');
}
