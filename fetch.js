const fetch = require('node-fetch')
require('dotenv').config()
const {city, apiKey} = process.env

fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`, {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => console.log(`La temperatura en Almeria es de ${data.main.temp} grados K`))
  .catch(err => console.error(err))
