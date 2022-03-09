let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    //Fill your code here
    console.log("Welcome " + line[0]+ " " + line[1] + " :-)");
})