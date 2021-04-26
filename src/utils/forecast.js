const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=95d70e68727b0c1cee6820a92604163b&query='
+ latitude + ',' + latitude
    request({url, json: true},(error, {body} = {}) => {
        if (error) {
            callback('Unable to connect', undefined)
        } else if (body.error) {
            callback('Unable to fetch', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature + " out. It feels like " + body.current.feelslike + " degrees out. Humidity: " + body.current.humidity)
        }
    })
    }

module.exports = forecast