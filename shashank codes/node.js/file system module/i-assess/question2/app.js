//Fill your code
var fs = require('fs');
const book = {
name : "Great Expectations",
description :"Classics loved by all",
price : 100
};

const json = JSON.stringify(book);
var stream = fs.createWriteStream("books.json");
stream.once('open', function(fd) {
  stream.write(json);
  stream.end();
});
//console.log(typeof(json));
//localStorage.setItem('books.json', JSON.stringify(book));