//Fill your code

let command = process.argv;

//command[2] = 'add';  => add book
//command[2] ='remove';  => removing book

if(command[2] === 'add'){
    console.log('Adding a Book');
}else{
    console.log('Removing a Book');
}