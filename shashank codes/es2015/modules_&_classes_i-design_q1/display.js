var fs = require('fs');
var data = fs.readFileSync('input.txt').toString().trim().split('\n');

//fill your code
module.exports.func = function (){
    return parseInt(data);
}