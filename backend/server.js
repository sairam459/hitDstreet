var express = require('express');
app = express();
jwt = require('jsonwebtoken');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var mongoose = require('mongoose');
var config = require('./config');
mongoose.connect('mongodb://localhost:27017/hitDstreet') // connect to our database

var port = process.env.PORT || 8080;
var router = require('./routes')
var cors = require('cors')
app.use(cors());
app.use('/hds', router);
app.listen(port);
console.log('Server running on port ' + port);