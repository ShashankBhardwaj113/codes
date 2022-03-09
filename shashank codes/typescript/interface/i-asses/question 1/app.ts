let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    data[1] = data[1].replace(/[\r\n]+/gm,``);
    //console.log(data);
    if(data[0].includes(data[1])){
        console.log(data[1] + ' is a substring of ' + data[0]);
    }else{
        console.log(data[1] + ' is not a substring of ' + data[0]);
    }
})