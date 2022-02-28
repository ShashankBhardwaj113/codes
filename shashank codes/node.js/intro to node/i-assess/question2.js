//Fill your code
var year = process.argv;

//year[2] = 1998;

if((year[2]%4 == 0 && year[2]%100 != 0) || (year[2]%400 == 0)){
    console.log('yes');
}else{
    console.log('no');
}