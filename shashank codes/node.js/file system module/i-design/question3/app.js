var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim();
//Fill your code

let revString = input.split("").reverse().join("");

var stream = fs.createWriteStream("output.txt");
stream.once('open', function(fd) {
  stream.write(revString);
  stream.end();
});

console.log(revString);
