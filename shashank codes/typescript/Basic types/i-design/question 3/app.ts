let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    //Fill your code here
    //console.log(line[0],line[1]);
    
    line[0] = line[0].replace(/[\r]+/gm,``);
    line[1] = line[1].replace(/[\r]+/gm,``);
    //console.log(line);
    let date1 = new Date(line[0])
    let date2 = new Date (line[1]);
    //console.log(date1, date2);

    try{
        if(date1.toISOString() === date2.toISOString()){
        console.log('Current date is equal to Expired date.');
    }else if(date1 < date2){
        console.log('Current date is less than Expired date.');
    }else if(date1 > date2){
        console.log('Current date is greater than Expired date.')
    }
    }
    catch(error){
        console.log('Invalid Date.');
    }
})