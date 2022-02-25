var fs = require('fs');
var array = fs.readFileSync('input.txt').toString();
array=array.trim();
array1=array.split("\n");

let data = array1.toString().replace(/[\r]+/gm,``).split(',');
console.log(data);

console.log("Menu");
console.log("1) Add");
console.log("2) Delete");
console.log("3) Clear");
console.log("4) Search");
console.log("5) Print");
//Fill code here
