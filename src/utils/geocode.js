const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiaG90cmFpbmVyIiwiYSI6ImNra3FsdnR3ejBvMnEybnMxdjRsYm9tM3gifQ.NC-Js_mlo0CHccar77vzUQ&limit=1'
    request({url, json: true}, (error, {body} ={}) => {
        if (error) {
            callback('Unavailable server', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to fetch', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location:  body.features[0].place_name
            })
        }
    })
}

module.exports = geocode