var fs = require('fs');
var input= fs.readFileSync("input.txt").toString().trim();

//Fill your code

var stream = fs.createWriteStream("output.txt");
stream.once('open', function(fd) {
  stream.write(input);
  stream.end();
});

console.log(input);