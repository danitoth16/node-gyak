const request = require('request')

// const url = 'http://api.weatherapi.com/v1/current.json?key=133d783e7ac5438ab0b163825221712&q=London&aqi=no'

// request({ url: url, json: true }, (error, response) => {
//     if(error) {
//         console.log('Unable to connect to weather service!')
//     } else if (response.body.error) {
//         console.log('Unable to find location!')
//     } else {
//         console.log('Londonban jelenleg ' + response.body.current.temp_c + ' fok van '+ 'és ' + response.body.current.wind_kph + ' km/h szél fúj')

//     }
// })


//Geocoding
//Address -> Lat/long -> Weather

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZGFuaXRvdGgxNiIsImEiOiJjbGJzNnp1MXYwOHQyM25td2ZwN3o4M3RzIn0.EMtT7TsaLs7C6fZu5OVGRA&limit=1'

request({url: geocodeURL, json: true}, (error, response) => {
    if(error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location!')
    } else {
        const latitude = response.body.features[0].center[0]
        const longitude = response.body.features[0].center[1]
        console.log(latitude,longitude)
    }
})