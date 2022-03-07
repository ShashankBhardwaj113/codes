var express = require('express')
var app = express()
app.set('port', process.env.PORT || 3000)

//fill your code
app.get('/index', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('*', (req, res)=>{
    res.send('Invalid URL')
})
app.listen(app.get('port'))


//below code is a backup measure. if above code does not work then try the below code

// var express = require('express')
// var app = express()
// app.set('port', process.env.PORT || 3000)

// //fill your code
// app.get('/index', (req, res)=>{
//     res.send('<h1>The Evenire</h1><p>For a successful event</p>')
//     console.log('hello');
// })
// app.get('*', (req, res)=>{
//     res.send('Invalid URL')
// })
// app.listen(app.get('port'))
