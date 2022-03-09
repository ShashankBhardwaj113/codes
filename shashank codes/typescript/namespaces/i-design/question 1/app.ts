let require:any;
let fs=require("fs");

namespace StringValidation{
    export function hasMinLength(productName: string): boolean{
        if(productName.length >= 10){
            return true;
        }
        return false;
    }

    export function hasMaxLength(productName: string): boolean{
        if(productName.length <=10){
            return true;
        }
        return false;
    }
    export function hasRegexPattern(productName: string): boolean{
        if(productName.match(/^[a-z0-9]+$/i))
        {
            return true;
        }
        return false;
    }
}

fs.readFile("input.txt","utf-8",function(err,data){
    // Fill your code here
    data = data.split(',');
    for(let i=0; i<data.length; i++){
        data[i] = data[i].replace(/[\r\n]+/gm,``);
    }
    //console.log(data);
    //console.log(StringValidation.hasRegexPattern(data[0]));
    
    if(StringValidation.hasMaxLength(data[0]) && StringValidation.hasMinLength(data[0])){
        if(StringValidation.hasRegexPattern(data[0])){
            console.log('Product name is ' + data[0]);
        }
    }else if(StringValidation.hasMinLength(data[0]) && StringValidation.hasRegexPattern(data[0])){
        if(!StringValidation.hasMaxLength(data[0])){
            console.log('Product name has not required length');
        }
    }else if(StringValidation.hasMaxLength(data[0]) && !StringValidation.hasRegexPattern(data[0])){
        if(!StringValidation.hasMinLength(data[0])){
            console.log('Product name has special characters')
        }
    }else{
        console.log('Product name has not required length and regex pattern')
    }
})