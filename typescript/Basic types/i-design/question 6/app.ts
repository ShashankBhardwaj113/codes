let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = parseFloat(data);
    console.log(data.toExponential(2));
})