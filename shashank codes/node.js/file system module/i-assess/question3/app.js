//Fill your code
var fs = require('fs');
var input = fs.readFileSync('books.json').toString().replace(/[\r]+/gm,``).trim().split('\n');

input[0] = input[0].slice(0,-1).slice(1);
//console.log(input[0]);
input[1] = input[1].slice(0,-1);
//console.log(input[1]);

const json0 = JSON.parse(input[0]);
const json1 = JSON.parse(input[1]);

console.log(json0);
console.log(json1);