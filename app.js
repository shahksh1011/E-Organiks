var express = require('express');
var session = require('express-session');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('assets'));
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended:false }));

app.use(session({secret: 'iloveuit'}));
//  routes defining
var mainController = require('./controller/mainController');
var userProfileController = require('./controller/userProfileController');

app.use('/', mainController);
app.use('/', userProfileController);

app.listen(8080,function(){
    console.log('app started');
    console.log('listening on port 8080');
});
