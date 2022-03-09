let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    line[0] = line[0].replace(/[\r]+/gm,``);
    line[1] = line[1].replace(/[\r]+/gm,``);
    //console.log(line)
;    
    //Fill your code here
    let flag = false;
    let categories = line[0].split('|');
    for(let val of categories){
        if(val.toLowerCase() == line[1].toLowerCase()){
            console.log(val.toLowerCase() + ' item is present.');
            flag = true;
            break;
        }
    }
    if(flag === false)
        console.log(line[1].toLowerCase() + ' item is not present.')
})