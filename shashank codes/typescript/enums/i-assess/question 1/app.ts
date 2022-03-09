let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split('\n');
    let roles = data[0].split(',');
    //console.log(roles);

    enum ROLE{
        endUser = '1',
        author = '2',
        subAdmin = '3',
        admin = '4'
    }
    let priority1 = parseInt(ROLE[roles[0]]);
    let priority2 = parseInt(ROLE[roles[1]]);
    if(priority2 < priority1){
        console.log(roles[0] + ' has more priority than ' + roles[1]);
    }
    else{
        console.log(roles[1] + ' has more priority than ' + roles[0]); 
    }
})