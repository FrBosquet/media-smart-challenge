const fetch = require('node-fetch')
require('dotenv').config()
const {city, units, apiKey} = process.env

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&APPID=${apiKey}`, {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => console.log(`La temperatura en Almeria es de ${data.main.temp} grados centigrados`))
  .catch(err => console.error(err))
