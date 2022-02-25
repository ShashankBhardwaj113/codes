//fill your code

const myMod = require("./display")
//console.log(typeof(myMod.func()));
let num = myMod.func();

function checkPrime(){
  if(num === 1){
    //console.log('Neither Prime nor Composite');
    return 'Neither Prime nor Composite';
  }
  for(let i=2; i<num; i++){
    if(num%i === 0)
    {
      //console.log('Composite Number');
      return 'Composite Number';
    }
  }
  return 'Prime Number';
}

console.log(checkPrime());