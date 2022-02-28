// Fill your code here
var validator = require('validator');

let email = process.argv;

//email[2] = 'mahirl@gmail.com';

if(validator.isEmail(email[2])){
    console.log('Valid');
}else{
    console.log('Invalid');
}