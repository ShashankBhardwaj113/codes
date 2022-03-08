var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

//fill your code

var events = {
  'one': {
    eventName: 'Marriage Event',
    eventId: '1',
  },
  'two': {
    eventName: 'Corporate Event',
    eventId: '2',
  },
  'three': {
    eventName: 'Social Event',
    eventId: '3',
  },
  'four': {
    eventName: 'Birthday Party',
    eventId: '4',
  }
};
app.get('', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/event/1', (req, res)=>{
  res.send(`<h1>Event Detail</h1>
            <p>Event Id : ${events.one.eventId}</br>
            Event Name : ${events.one.eventName}</p>`)
})
app.get('/event/2', (req, res)=>{
  res.send(`<h1>Event Detail</h1>
            <p>Event Id : ${events.two.eventId}</br>
            Event Name : ${events.two.eventName}</p>`)
})
app.get('/event/3', (req, res)=>{
  res.send(`<h1>Event Detail</h1>
            <p>Event Id : ${events.three.eventId}</br>
            Event Name : ${events.three.eventName}</p>`)
})
app.get('/event/4', (req, res)=>{
  res.send(`<h1>Event Detail</h1>
            <p>Event Id : ${events.four.eventId}</br>
            Event Name : ${events.four.eventName}</p>`)
})
app.get('*', (req, res)=>{
  res.send(`<p>Oops! Page Not found</p>`)
})
app.listen(app.get('port'));
