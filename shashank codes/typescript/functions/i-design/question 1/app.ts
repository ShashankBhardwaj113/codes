let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    for(let i=0; i<line.length; i++){
        line[i] = line[i].replace(/[\r]+/gm,``);
        line[i] = line[i].split(',');
    }
    //Fill your code here

    function sum(prod1:number, prod2:number, prod3?:number): number{
        let total = prod1 + prod2 + prod3;
        return total;
    }
    
    for(let i=0; i<line.length; i++){
        if(line[i].length == 2){
            let num1 = parseInt(line[i][0]);
            let num2 = parseInt(line[i][1]);
            console.log(num1 + num2);
        }
        if(line[i].length == 3){
            let num1 = parseInt(line[i][0]);
            let num2 = parseInt(line[i][1]);
            let num3 = parseInt(line[i][2]);
            console.log(num1 + num2 + num3);
        }
    }
    
});