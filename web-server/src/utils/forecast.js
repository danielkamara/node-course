const request = require('request')




const forecast = (lat, lon, callback) => {
        const url = 'http://api.weatherstack.com/current?access_key=3d304656ef7f6161a07ee943a166b46e&query=' + lat + ' , ' + lon + '&units=f'

        request({
            url,
            json: true
        }, (err, { body }) => {
            if (err) {
                callback('Unable to connect to weather service!', undefined)
            } else if (body.err) {
                callback('Unable to find location!', undefined)
            } else {
                callback(undefined, )
                let currentTemp = body.current.temperature
                let currentPrecip = body.current.precip
                let description = body.current.weather_descriptions[0]
                console.log(description + '. It is ' + currentTemp + ' degrees out. There is a ' + currentPrecip + '% chance of rain.')
            }
        })
    }


        module.exports = forecast