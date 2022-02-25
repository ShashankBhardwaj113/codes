var fs = require('fs');
var array = fs.readFileSync('input.txt').toString();
array=array.trim();
array1=array.split("\n");

let data = array1.toString().replace(/[\r]+/gm,``).split(',');
//console.log(data);

console.log("Menu");
console.log("1) Add");
console.log("2) Delete");
console.log("3) Clear");
console.log("4) Search");
console.log("5) Print");
//Fill code here
let mySet = new Set();
for(let i=0; i<data.length; i++){
    if(data[i] == 1){
        i++;
        mySet.add(data[i]);
        //console.log(data[i]);
    }
    else if(data[i] == 2){
        i++;
        mySet.delete(data[i]);
    }
    else if(data[i] == 3){
        mySet.clear();
    }
    else if(data[i] == 4){
        i++;
        if(mySet.has(data[i]))
        {
            console.log('Yes');
        }
        else{
            console.log('No');
        }
    }
    else if(data[i] == 5){
        for(x of mySet){
            console.log(x);
        }
    }
    else{
        console.log('Invalid choice');
    }

}
