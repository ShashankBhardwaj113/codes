var fs=require('fs');
var input=fs.readFileSync('input.txt').toString().trim();

//Fill your code here
input = parseInt(input);

const factorial = (input) =>{
    let result = 1;
    for(let i=1; i<=input; i++)
        result = result*i;

    return result;
};

console.log(factorial(input));