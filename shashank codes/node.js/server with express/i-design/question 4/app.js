var express = require('express');
var app = express();
//var path = require('path');
//app.use(express.static(__dirname))
app.set('port', process.env.PORT || 3000)

//fill your code 
app.get('/home', (req, res)=>{
    res.sendFile(__dirname + '/home.html')
})
app.get('/list', (req, res)=>{
    res.sendFile(__dirname + '/list.html')
})
app.listen(app.get('port'))