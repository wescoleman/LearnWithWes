var express = require("express"),
    app = express(),
    path = require('path'),
    mongoose = require('mongoose'),
    dbURL = process.env.LWWDBURL,
    // dbURL = "mongodb://localhost:27017/LWW",
    Sketches = require('./models/Sketches');


// standard routes
var homeRoute = require('./routes/standardRoutes/homeRoute'),
	aboutMeRoute = require('./routes/standardRoutes/aboutMeRoute'),
	addCarouselImageRoute = require('./routes/standardRoutes/addCarouselImageRoute');

// sketch routes
var eyeTrackerRoute = require('./routes/sketches/eyeTrackerRoute'),
    physonicsRoute = require('./routes/sketches/physonicsRoute'),
    orbitalFollowersRoute = require('./routes/sketches/orbitalFollowersRoute');




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
app.use(orbitalFollowersRoute);
app.use(addCarouselImageRoute);




app.listen(process.env.PORT || 1234, function() {
    console.log("server is running on localhost:1234");
});