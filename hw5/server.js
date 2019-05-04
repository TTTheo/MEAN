const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const hw4router = require('./routes/hw4') ;
const authrouter = require("./routes/auth") ;
const profilerouter = require("./routes/profile") ;
const mongoose = require("mongoose") ;
const keys = require("./keys") ;
const passportsetup = require("./passport") ;
const cookieSession = require("cookie-session") ;
const passport = require("passport")

const app = express() ;
const port = process.env.PORT || 4200 ;
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys:[keys.session.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.monggdb.dbURL, () => {
  console.log('connected to mongodb') ;
})

app.listen(port, (req, res) => {
  console.log("Running") ;
}) ;

app.use(express.static(path.join(__dirname, 'dist/angulardemo'))) ;

app.use('/hw4', hw4router) ;
app.use('/auth', authrouter) ;
app.use('/profile', profilerouter) ;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angulardemo/index.html')) ;
}) ;
