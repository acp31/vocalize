var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

//setting the port
app.set('port', (process.env.PORT || 3000));

//Setting the static path
app.use(express.static(path.join(__dirname, 'client')));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Starting the server
app.listen(app.get('port'), function(){
  console.log('Server has started on Port: ' + app.get('port'));
});
