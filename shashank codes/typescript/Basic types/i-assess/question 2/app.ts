let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = parseFloat(data);
    if(data!= NaN){
        console.log(data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
    }
    else{
        console.log('NaN');
    }
})