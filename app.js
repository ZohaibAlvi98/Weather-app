var express = require("express")

var app = express();


app.use(express.static(__dirname + "/public"))

var request = require("request");
require('./routes')(app);

  

app.listen(3000, function(){
    console.log("server has started");
})