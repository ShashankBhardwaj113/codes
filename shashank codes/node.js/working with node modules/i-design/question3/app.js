//Fill your code
var validator = require('validator');

let url = process.argv;

//url[2] = 'http://e-box.co.in'; =>valid
//url[2] = 'mahirl@gmail@com'; =>Invalid

if(validator.isURL(url[2])){
    console.log('Valid');
}else{
    console.log('Invalid');
}