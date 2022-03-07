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
app.get('/events/111', (req, res)=>{
    res.send(`<body>
        <h1>Event Details</h2>
        <p>Event Id - ${eventDetails.events[0].eventId}</p>
        <p>Event Name - ${eventDetails.events[0].eventName}</p>
        <p>Event Date - ${eventDetails.events[0].eventDate}</p>
        <p>Event Location - ${eventDetails.events[0].eventLocation}</p>
    </body>`)
})
app.get('/events/112', (req, res)=>{
    res.send(`<body>
        <h1>Event Details</h2>
        <p>Event Id - ${eventDetails.events[1].eventId}</p>
        <p>Event Name - ${eventDetails.events[1].eventName}</p>
        <p>Event Date - ${eventDetails.events[1].eventDate}</p>
        <p>Event Location - ${eventDetails.events[1].eventLocation}</p>
    </body>`)
})
app.get('/events/113', (req, res)=>{
    res.send(`<body>
        <h1>Event Details</h2>
        <p>Event Id - ${eventDetails.events[2].eventId}</p>
        <p>Event Name - ${eventDetails.events[2].eventName}</p>
        <p>Event Date - ${eventDetails.events[2].eventDate}</p>
        <p>Event Location - ${eventDetails.events[2].eventLocation}</p>
    </body>`)
})
app.get('/events/114', (req, res)=>{
    res.send(`<body>
        <h1>Event Details</h2>
        <p>Event Id - ${eventDetails.events[3].eventId}</p>
        <p>Event Name - ${eventDetails.events[3].eventName}</p>
        <p>Event Date - ${eventDetails.events[3].eventDate}</p>
        <p>Event Location - ${eventDetails.events[3].eventLocation}</p>
    </body>`)
})
app.get('/events/115', (req, res)=>{
    res.send(`<body>
        <h1>Event Details</h2>
        <p>Event Id - ${eventDetails.events[4].eventId}</p>
        <p>Event Name - ${eventDetails.events[4].eventName}</p>
        <p>Event Date - ${eventDetails.events[4].eventDate}</p>
        <p>Event Location - ${eventDetails.events[4].eventLocation}</p>
    </body>`)
})
app.get('*', (req, res)=>{
    res.send('This is an invalid URL')
})
app.listen(app.get('port'))


//below is a backup code. execute in case above one doesn't work



// var express = require('express');
// var app = express();
// //var path = require('path');
// //app.use(express.static(__dirname))
// app.set('port', process.env.PORT || 3000)

// const eventDetails = {
//    "events" : [
//     {'eventId': 111, 'eventName':'A-Z Planning', 'eventDate':'2019-12-15', 'eventLocation':'Chennai'},
//     {'eventId': 112, 'eventName':'Creative Corner', 'eventDate':'2019-07-05', 'eventLocation':'Erode'},
//     {'eventId': 113, 'eventName':'DreamTeam', 'eventDate':'2019-06-07', 'eventLocation':'Salem'},
//     {'eventId': 114, 'eventName':'Unique Planners', 'eventDate':'2019-11-10', 'eventLocation':'Bangalore'},
//     {'eventId': 115, 'eventName':'Last Moment Savers', 'eventDate':'2019-07-05', 'eventLocation':'Erode'}
//     ]
// }

// //fill your code
// app.get('/events/111', (req, res)=>{
//     res.send(`<body>
//         <h1>Event Details</h2>
//         <p>Event Id - ${eventDetails.events[0].eventId}</p>
//         <p>Event Name - ${eventDetails.events[0].eventName}</p>
//         <p>Event Date - ${eventDetails.events[0].eventDate}</p>
//         <p>Event Location - ${eventDetails.events[0].eventLocation}</p>
//     </body>`)
// })
// app.get('/events/112', (req, res)=>{
//     res.send(`<body>
//         <h1>Event Details</h2>
//         <p>Event Id - ${eventDetails.events[1].eventId}</p>
//         <p>Event Name - ${eventDetails.events[1].eventName}</p>
//         <p>Event Date - ${eventDetails.events[1].eventDate}</p>
//         <p>Event Location - ${eventDetails.events[1].eventLocation}</p>
//     </body>`)
// })
// app.get('/events/113', (req, res)=>{
//     res.send(`<body>
//         <h1>Event Details</h2>
//         <p>Event Id - ${eventDetails.events[2].eventId}</p>
//         <p>Event Name - ${eventDetails.events[2].eventName}</p>
//         <p>Event Date - ${eventDetails.events[2].eventDate}</p>
//         <p>Event Location - ${eventDetails.events[2].eventLocation}</p>
//     </body>`)
// })
// app.get('/events/114', (req, res)=>{
//     res.send(`<body>
//         <h1>Event Details</h2>
//         <p>Event Id - ${eventDetails.events[3].eventId}</p>
//         <p>Event Name - ${eventDetails.events[3].eventName}</p>
//         <p>Event Date - ${eventDetails.events[3].eventDate}</p>
//         <p>Event Location - ${eventDetails.events[3].eventLocation}</p>
//     </body>`)
// })
// app.get('/events/115', (req, res)=>{
//     res.send(`<body>
//         <h1>Event Details</h2>
//         <p>Event Id - ${eventDetails.events[4].eventId}</p>
//         <p>Event Name - ${eventDetails.events[4].eventName}</p>
//         <p>Event Date - ${eventDetails.events[4].eventDate}</p>
//         <p>Event Location - ${eventDetails.events[4].eventLocation}</p>
//     </body>`)
// })
// app.get('*', (req, res)=>{
//     res.send('This is an invalid URL')
// })
// app.listen(app.get('port'))

