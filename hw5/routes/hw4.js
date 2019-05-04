const express = require('express') ;
const router = express.Router() ;
const axios = require('axios') ;
let apiKey = 'c143e155f4e166a40b760ce4c58618ef';
let city = 'boston';
const weatherapi = 'http://api.openweathermap.org' ;


router.get('/weather', (req, res)=> {
  axios.get(`${weatherapi}${city}&appid=${apiKey}`).then(weather => {
    res.status(200).json(weather.data) ;
  })
    .catch(error => {
      res.status(500).send(error) ;
    })
}) ;
module.exports = router ;
