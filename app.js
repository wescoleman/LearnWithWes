var express = require("express");
var app = express();
app.use(express.static('public'));

app.set("view engine", "ejs");
// ==================================
// INDEX ROUTE
// ==================================
app.get("/", function(req, res){
	res.render("home");
});

app.get("/eyetracker", function(req, res){
	res.render("eyetracker");
});



app.listen(process.env.PORT || 3000, function(){
	console.log("server is running!");
});