var express = require('express');
var app = express();
//var path = require('path');
//app.use(express.static(__dirname))
app.set('port', process.env.PORT || 3000)

const eventDetails = {
   "events" : [
    {'eventId': 111, 'eventName':'A-Z Planning', 'eventDate':'2019-12-15', 'eventLocation':'Chennai'},
    {'eventId': 112, 'eventName':'Creative Corner', 'eventDate':'2019-07-05', 'eventLocation':'Erode'},
    {'eventId': 113, 'eventName':'DreamTeam', 'eventDate':'2019-06-07', 'eventLocation':'Salem'},
    {'eventId': 114, 'eventName':'Unique Planners', 'eventDate':'2019-11-10', 'eventLocation':'Bangalore'},
    {'eventId': 115, 'eventName':'Last Moment Savers', 'eventDate':'2019-07-05', 'eventLocation':'Erode'}
    ]
}

//fill your code
app.get('/obtainEvent/111', (req, res)=>{
    res.send(`<body>
        ${JSON.stringify(eventDetails.events[0])}
    </body>`)
})
app.get('/obtainEvent/112', (req, res)=>{
    res.send(`<body>
        ${JSON.stringify(eventDetails.events[1])}
    </body>`)
})
app.get('/obtainEvent/113', (req, res)=>{
    res.send(`<body>
        ${JSON.stringify(eventDetails.events[2])}
    </body>`)
})
app.get('/obtainEvent/114', (req, res)=>{
    res.send(`<body>
        ${JSON.stringify(eventDetails.events[3])}
    </body>`)
})
app.get('/obtainEvent/115', (req, res)=>{
    res.send(`<body>
        ${JSON.stringify(eventDetails.events[4])}
    </body>`)
})
app.get('*', (req, res)=>{
    res.send('Invalid event')
})
app.listen(app.get('port'))