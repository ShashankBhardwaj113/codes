const mongoose = require('mongoose')

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('config.json', 'utf8'));

const connectionUrl = `mongodb://${obj.host}:${obj.port}/${obj.database}`

mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
