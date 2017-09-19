var http = require('http');
require('dotenv').config();

var cities = process.env.cities.split('-');
var apiKey = process.env.apiKey;

function getCityTemp(city){
  return new Promise(function(resolve, reject){
    http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`, function(response){
      var str = '';

      response.on('data', function(data){
        str += data;
      })

      response.on('end', function() {
        data = JSON.parse(str);
        resolve(data.main.temp);
      })

      response.on('error', reject);
    })
  })
}

Promise.all(cities.map(city => getCityTemp(city)))
  .then(data => {
    const avgTemp = data.reduce(function(accum, temp){
      return accum + temp/data.length
    }, 0);
    console.log(`La temperatura media de las 8 capitales andaluzas es ${avgTemp.toFixed(2)}K`)
  });
