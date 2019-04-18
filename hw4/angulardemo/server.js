const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const hw4router = require('./routes/hw4') ;

const app = express() ;
const port = process.env.PORT || 4200 ;
// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, (req, res) => {
  console.log("Running") ;
}) ;

app.use(express.static(path.join(__dirname, 'dist/angulardemo'))) ;

app.use('/hw4', hw4router) ;

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/angulardemo/index.html')) ;
}) ;
