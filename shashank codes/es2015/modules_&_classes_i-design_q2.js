var fs = require('fs');
var userData = fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code
let userName = userData[0];
let userPasswordArray = userData[1].split('');

for(let i=0; i<userPasswordArray.length; i++){
    let val = userPasswordArray[i];
    userPasswordArray[i] = String.fromCharCode(val.charCodeAt(0) + 1);
}
let userPassword = userPasswordArray.toString().replace(/[,]+/gm,``);

class User {
    //fill your code
    _encryptedPassword =  '';
    set writePassword(value){
        this._encryptedPassword = value;
    }
    get showPassword(){
        return this._encryptedPassword;
    }
    constructor(name, password){
        this.name = name;
        this.password = password;
    }
    login(){
        User.encryptedPassword = userPassword;
        let pass = User.encryptedPassword;
        //console.log(pass + ' ' + this.name + ' ' + this.password);
        if(this.password == pass){
            return 'Successfully logged in';
        }else{
            return 'Invalid username/password';
        }
    }
}

let user = new Array();
user[0] = new User("Adolf", "bepm234");
user[1] = new User("Regenia", "sfhf34");
user[2] = new User("Katherine", "lbuif37");
user[3] = new User("Jessika", "kfttj");
user[4] = new User("Sarah", "tbsb18");

//fill your code

console.log(user[2].login());
