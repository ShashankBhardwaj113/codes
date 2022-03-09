let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    for(let i=0; i<data.length; i++){
        data[i] = data[i].replace(/[\r\n]+/gm,``);
    }
    //console.log(data);

    interface User{
        name: string
        gender: string
        age: string;
        mailId: string;
    }
    interface Author extends User{
        profession: string;
    }
    function printDetails<T extends Author>(dat: T): void{
        console.log(`Name : ${dat[0]}
Gender : ${dat[1]}
Age : ${dat[2]}
MailId : ${dat[3]}
Profession : ${dat[4]}`)
    }
    printDetails<Author>(data);
})