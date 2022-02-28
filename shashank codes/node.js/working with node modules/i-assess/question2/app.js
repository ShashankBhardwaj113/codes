//Fill your code
//import yargs from "yargs";

let command = process.argv.slice(2);
//console.log(command[1]);
//console.log(command[2]);
//console.log(command[3]);
 if(command[0] == 'add'){
   console.log('Adding a Book');
   console.log(command[1].slice(8));
   let desc = command[2].split('=');
   console.log(desc[1]);
   let price = command[3].split('=');
   console.log(price[1]);
 }else{
   console.log('Removing a Book');
   console.log(command[1].slice(8));
 }