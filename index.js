var express = require("express");
var app = express();
var port = 3000;


app.get("/", function(req, res){
    res.sendFile( __dirname + "/public/" + "home.html" );
});

app.listen(port, function(){
    console.log("Scrypter listen in port: " + port);
});