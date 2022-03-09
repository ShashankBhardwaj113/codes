let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    line = line[0].split('|');

    for(let i=0; i<line.length; i++){
        line[i] = line[i].split(',');
    }

    let price = 0;
    for(let i=0; i<line.length; i++){
        if(line[i][0].length > 0){
            if(line[i][2].length != 0){
                let gst = (parseFloat(line[i][1]) * parseFloat(line[i][2]))/100;
                price = price + parseFloat(line[i][1]) + gst;
            }
            else{
                let gst = (parseFloat(line[i][1]) * 18)/100;
                price = price + parseFloat(line[i][1]) + gst;
            }
        }
    }
    console.log('The Total price of all products including GST is ' + price.toFixed(2) + '.');
    //console.log(line);
    //Fill your code here

})