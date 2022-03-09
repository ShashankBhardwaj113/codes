let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    
    //Fill your code here
    line[0] = parseInt(line[0].replace(/[\r]+/gm,``));
    line[1] = parseInt(line[1].replace(/[\r]+/gm,``));
    //console.log(line[0], line[1] , typeof(line[0]), typeof(line[1]));

    console.log('Addition of two numbers : ' + (line[0]+line[1]));
    console.log('Subtraction of two numbers : ' + (line[0]-line[1]));
    console.log('Multiplication of two numbers : '+ (line[0]*line[1]));
    console.log('Division of two numbers : ' + (line[0]/line[1]).toFixed(2));

})