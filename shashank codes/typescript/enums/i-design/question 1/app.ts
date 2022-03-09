let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    data = data.split('\n');
    // Fill your code here
    enum MONTHS{
        January=1,
        February,
        March,
        April,
        May,
        June,
        July,
        August,
        September,
        October,
        November,
        December
    }
    const length = 12;
    let found = false;
    for (let i = 0; i < Object.keys(MONTHS).length; i++) {
        if (data[0] == Object.keys(MONTHS)[i]) {
            if (i < length) {
                console.log(Object.keys(MONTHS)[i + length]);
            } else {
                console.log(Object.keys(MONTHS)[i - length]);
            }
            found = true;
        }
    }
    
    if (!found) {
        console.log('Invalid Input');
    }
})