var fs = require('fs');
var input=fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

class User {
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name;
    }

}

function checkNameLength(person){

        let name = person.getName();

        if (name.length > 4)
            console.log(name);
        else
            console.log("Name is too short");
    }

var person = new User(input[0]);
checkNameLength(person);