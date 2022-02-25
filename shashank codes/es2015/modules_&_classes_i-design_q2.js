var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().trim().split('\n');
//fill your code

class User {
    //fill your code
    constructor(name, password){
        this.name = name;
        this._encryptedPassword = password;
    }
    set pass(val){
        this._encryptedPassword = val;
    }
    get value(){
        return this._encryptedPassword;
    }
}

let user = new Array();
user[0] = new User("Adolf", "bepm234");
user[1] = new User("Regenia", "sfhf34");
user[2] = new User("Katherine", "lbuif37");
user[3] = new User("Jessika", "kfttj");
user[4] = new User("Sarah", "tbsb18");

//fill your code
function getEncrypted(value){
    var ans = "";
    for(var i = 0; i<value.length; i++){
        code = value.charCodeAt(i) + 1;
        ans += String.fromCharCode(code);
    }
    return ans;
}
var pasEncrypted = getEncrypted(input[1]);
for(x of user){
    if(input[0].trim() === x.name && x.value === pasEncrypted){
        console.log("Successfully logged in");
        return;
    }
}
console.log("Invalid username/password");
