var http = require('http');
require('dotenv').config();

var city = process.env.city;
var units = process.env.units;
var apiKey = process.env.apiKey;

http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`, function(response){
  var str = '';

  response.on('data', function(data){
    str += data;
  })

  response.on('end', function() {
    data = JSON.parse(str);
    console.log(`La temperatura en Almeria es de ${data.main.temp} grados centigrados`);
  })

})
