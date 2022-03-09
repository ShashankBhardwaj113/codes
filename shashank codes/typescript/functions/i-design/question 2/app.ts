let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.replace(/[\r]+/gm,``);
    data = parseInt(data);
    let leapYear = (year):boolean =>{
        if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
            return true;
        } else {
            return false;
        }
    }
    console.log(leapYear(data));
})