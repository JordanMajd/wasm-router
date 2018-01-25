'use strict';

const fs = require('fs');

module.exports = fetchWasm;

function fetchWasm(filePath){
  return new Promise(function(resolve, reject){
    fs.readFile(filePath, null, function(err, data){
      if (!err){
        resolve(data);
      } else {
        reject(err);
      }
    });
  });
};
