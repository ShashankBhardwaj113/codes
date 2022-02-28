//Fill your code
var math = require('mathjs');

let command = process.argv.slice(2);

//command[0] = 3+4*2; => 11

console.log(math.evaluate(command[0]));