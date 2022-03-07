const process = require('process');
  
// Printing process.argv property value
var args = process.argv;
  
console.log(parseInt(args[2]) + parseInt(args[3]));