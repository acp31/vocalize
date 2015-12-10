var express = require('express');
var BinaryServer = require('binaryjs').BinaryServer;
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var wav = require('wav');

var outFile = 'demo.wav';
var app = express();

//setting the port
app.set('port', (process.env.PORT || 3700));
app.set('views', __dirname + 'client');

//Setting the static path
app.use(express.static(path.join(__dirname, 'client')));

//BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
  res.render('index');
});

//Starting the server
app.listen(app.get('port'), function(){
  console.log('Server has started on Port: ' + app.get('port'));
});

//This is the Binary server 
binaryServer = BinaryServer({port: 9001});

binaryServer.on('connection', function(client) {
  console.log('new connection');

  var fileWriter = new wav.FileWriter(outFile, {
    channels: 1,
    sampleRate: 48000,
    bitDepth: 16
  });

  client.on('stream', function(stream, meta) {
    console.log('new stream');
    stream.pipe(fileWriter);

    stream.on('end', function() {
      fileWriter.end();
      console.log('wrote to file ' + outFile);
    });
  });
});