const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherapi.com/v1/forecast.json?key=133d783e7ac5438ab0b163825221712&q=' + latitude + ','+ longitude + '&aqi=no'

    request({ url: url, json: true }, (error, response) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if (response.body.error) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                
                today: response.body.current.temp_c
            })
        }
    })
}

module.exports = forecast