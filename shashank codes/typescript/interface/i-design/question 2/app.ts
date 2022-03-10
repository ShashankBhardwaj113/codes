let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    let line=data.split("\n");
    //Fill your code here
    interface product{
        name: string;
        brand: string;
        price: number;
        discount: number;
    }

    line[0] = line[0].replace(/[\r]+/gm,``);
    line[1] = line[1].replace(/[\r]+/gm,``);
    let jsonString = JSON.parse(line[0]);
    //console.log(jsonString[0]);
    //console.log(line[1]);
    if(line[1] === 'ASC')
        {   jsonString.sort((a,b) => {
            return a.price - b.price;
            });}
    else if(line[1] === 'DES') {
            jsonString.sort((a,b) => {
                return b.price - a.price;
                });
                }
    
    // jsonString = JSON.stringify(jsonString);
    // let unquoted = jsonString.replace(/"([^"]+)":/g, '$1:');
    // unquoted = unquoted.replace(/["]+/gm,`'`);
    console.log(jsonString);
})
