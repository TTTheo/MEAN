const express = require('express');
const router = express.Router();
const request = require('request');

let apiKey = 'c143e155f4e166a40b760ce4c58618ef';
let city = 'portland';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

function getWeather(callback){
    request(url, function (err, response, body) {
        if(!err && response.statusCode==200){
            let result = JSON.parse(body) ;
            return callback(null, result) ;
        } else {
            console.log('error:', error);
        }
    });
}


router.get('/', function(req, res, next) {
    getWeather(function (err, data) {
        if(err) return res.send(err) ;
        else res.send(data.main) ;
    })
});


module.exports = router;
