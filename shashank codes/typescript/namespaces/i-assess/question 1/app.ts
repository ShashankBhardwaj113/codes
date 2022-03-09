let require:any;
let fs=require("fs");
fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    for(let i=0; i<data.length; i++){
        data[i] = data[i].replace(/[\r\n]+/gm,``);
    }
    //console.log(data);

    enum vowels{
        a = '1',
        e = '2',
        i = '3',
        o = '4',
        u = '5' 
    };
    if(vowels[data[0]]){
        console.log('It is a vowel')
    }else{
        console.log('It is not a vowel');
    }
})