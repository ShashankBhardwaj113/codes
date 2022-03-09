let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    for(let i=0; i<data.length; i++){
        data[i] = data[i].replace(/[\r\n]+/gm,``);
    }
    //console.log(data);
    
    function add<T>(var1:any, var2:any): any{
        return var1 + var2;
    }
    if(isNaN(data[0]) || isNaN(data[1])){
        console.log(add<string>(data[0],data[1]));
    }
    else{
        console.log(add<number>(parseInt(data[0]), parseInt(data[1])));
    }
})