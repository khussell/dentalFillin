const express = require("express");
const passport = require('./config/passport')
//const cookieParser = require('cookie-parser')
const session = require('express-session')
const cookieSession = require('cookie-session')



const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware, Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Session middleware
//app.use(cookieParser())
app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

//app.use(session({
//  secret:'thesecret',
//  saveUninitialized: false,
//  resave:false
//}))

//Passport middleware
app.use(passport.initialize())
app.use(passport.session())

const routes = require("./routes");


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://user:password1@ds255107.mlab.com:55107/heroku_gmpz2nfn")
.then(()=>console.log("connected"))
.catch(err => console.log(err))

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
