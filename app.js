var express = require("express");
var app = express();

app.set("view engine", "ejs");
// ==================================
// INDEX ROUTE
// ==================================
app.get("/", function(req, res){
	res.render("home");
});





app.listen(process.env.PORT || 3000, function(){
	console.log("server is running!");
});