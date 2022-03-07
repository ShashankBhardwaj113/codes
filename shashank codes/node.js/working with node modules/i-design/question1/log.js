let obj = {
    info : function(val){
        console.log('Info : ' + val);
    },
    warning : function(val){
        console.log('Warning : ' + val);
    },
    error : function(val){
        console.log('Error : '+val);
    }
}

module.exports = obj;