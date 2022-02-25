var fs=require('fs');
var input=fs.readFileSync('concat.txt').toString().trim().split(',');
//Fill your code here
let arr1 = [input[0]];
let arr2 = [input[1]];

let array = [...arr1, arr2];

//console.log(array);

let string1 = array.toString().trim().replace(/[\r\n]+/gm, ` `);

//console.log(string1.replace(/[,]+/gm, ``));

string1 = string1.replace(/[,]+/gm, ``);

console.log(string1);
/*let string2 = "";
for(var i = 0; i<string1.length; i++){
    if(!(string1[i])==','){
        string2 += string1[i];
    }
}

console.log(string2);*/