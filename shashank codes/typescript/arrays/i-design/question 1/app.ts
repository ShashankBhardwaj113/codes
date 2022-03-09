let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");

    //Fill your code here
    for(let i=0; i<line.length; i++){
        line[i] = line[i].replace(/[\r]+/gm,``);
    }
    let newArray = line.sort();
    for(let val of newArray){
        console.log(val);
    }
})