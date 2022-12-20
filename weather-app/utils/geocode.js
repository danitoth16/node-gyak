const request = require('request')

const geocode = (addres, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(addres) + '.json?access_token=pk.eyJ1IjoiZGFuaXRvdGgxNiIsImEiOiJjbGJzNnp1MXYwOHQyM25td2ZwN3o4M3RzIn0.EMtT7TsaLs7C6fZu5OVGRA&limit=1'

    request({url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to find location. Try another search!', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode