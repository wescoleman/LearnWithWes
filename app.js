var express = require("express"),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    dbURL = "mongodb://localhost:27017/LWW",
    Sketches = require('./models/Sketches');


// standard routes
var homeRoute = require('./routes/standardViews/homeRoute'),
	aboutMeRoute = require('./routes/standardViews/aboutMeRoute');

// sketch routes
var eyeTrackerRoute = require('./routes/sketches/eyeTrackerRoute'),
    physonicsRoute = require('./routes/sketches/physonicsRoute');




mongoose.connect(dbURL, { useNewUrlParser: true });
app.use(express.static('public'));
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));
// ==================================
// INDEX ROUTES
// ==================================


app.use(homeRoute);
app.use(aboutMeRoute);
app.use(eyeTrackerRoute);
app.use(physonicsRoute);




app.listen(process.env.PORT || 3000, function() {
    console.log("server is running on localhost:3000");
});