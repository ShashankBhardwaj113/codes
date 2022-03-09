let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    console.log(data.replace(/[\n]+/gm,``) + ' !!!');
})