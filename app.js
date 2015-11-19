var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');

var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
var morgan = require('morgan')
var errorhandler = require('errorhandler')

var routes = require('./routes/index.js');
var template_db = require('./routes/template.js');	

/*
	Server Config 
*/
app.use(serveStatic(__dirname + '/views'));

app.set('view engine','html');
app.set('layout','layout');
app.engine('html', require('hogan-express'));
    
app.use(bodyParser());//deals with incoming request objects
    
/**** Turn on some debugging tools ****/
app.use(morgan());
app.use(errorhandler({ dumpExceptions: true, showStack: true }));

app.use(express.static(path.join(__dirname, 'public')));    

//app.db = mongoose.connect(process.env.MONGOLAB_URI);
console.log("connected to database");


/*
	Main Page Routes
*/
app.get('/', routes.main);
app.get('/template', template_db.main);


var port = process.env.PORT || 5000;
app.listen(port, function(){
	console.log("Listening on " + port);
});