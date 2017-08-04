// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

app.get('/:data', function(req,res,next){
  var data = req.params.data;
  var natural, unix;
  var options = {year: 'numeric', month: 'long', day: 'numeric' };
    if (isNaN(data)) {
      natural = new Date(data).toLocaleDateString('en-US', options);
      natural = natural === "Invalid Date" ? null : natural;
      unix = Date.parse(data)/1000;
    } else {
      natural = new Date(data*1000).toLocaleDateString('en-US', options);
      unix = data;
    }
  res.json({
    unix: unix, 
    natural: natural
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
           
           
/*
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

*/
// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
/*

app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
*/