var fs=require('fs');
var input= fs.readFileSync("input.txt").toString().trim().split("\n");

//Fill Code here

//input is converterted to number and then stored in array called number
let numbers = new Array();
for(let i=0; i<input.length; i++){
    numbers[i] = parseInt(input[i]);
}

// filtering
const result = numbers.filter(filterArray);
function filterArray(check){
    return check % 10 === 0;
}

//displaying
if(result.length != 0){
    for(let val of result)
        console.log(val);
}else{
    console.log('No elements that are multiples of 10');
}