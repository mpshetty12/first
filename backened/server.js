var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded(
    {extended:false}
)); 
app.use(cors());

var auth = require('./queries/auth');
app.use("/auth",auth);

app.listen(8080);
console.log("server start to listen on port 8080");