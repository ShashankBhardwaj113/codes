let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    //console.log(line[0]);
    //Fill your code here

    let jsonString = JSON.parse(line[0])
    //console.log(jsonString , line[1]);

    let flag = false;
    for(let val of jsonString){
        if(val.authorName == line[1])
        {
            console.log(JSON.stringify(val));
            flag = true;
        }
    }
    if(flag == false)
        console.log('No books available for the authorname : ' + line[1] + '.');
})