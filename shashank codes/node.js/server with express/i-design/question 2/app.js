var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000)

//fill your code
app.get('', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.listen(app.get('port'))
