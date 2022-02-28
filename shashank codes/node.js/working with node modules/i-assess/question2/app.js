//Fill your code

let command = require('yargs/yargs')(process.argv.slice(2)).argv

 if(command._ == 'add'){
   console.log('Adding a Book');
   console.log(command.title);
   console.log(command.description);
   console.log(command.price);
 }else{
   console.log('Removing a Book');
   console.log(command.title);
 }

