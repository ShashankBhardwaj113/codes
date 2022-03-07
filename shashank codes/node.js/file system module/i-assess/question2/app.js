//Fill your code
var fs = require('fs');
var input = fs.readFileSync('books.json',{encoding:'utf8',flag:'r'}).toString();

input = JSON.parse(input);
for(let val of input)
    console.log(val);
/*input[0] = input[0];
//console.log(input[0]);
input[1] = input[1];
//console.log(input[1]);

const json0 = JSON.parse(input[0]);
const json1 = JSON.parse(input[1]);

console.log(json0);
console.log(json1);*/

