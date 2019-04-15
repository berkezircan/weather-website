const request = require('request');

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/f7a5aad293eca02364c900e9473b1441/'+ latitude +','+longitude+'?units=si';

    request({ url, json:true}, (error, { body })=> {
        if(error){
            callback('Unable to connect to weather service',undefined);
        } else if(body.error){
            callback('Unable to find location',undefined);
        } else {
            callback(undefined, `${body.daily.data[0].summary} It is current ${body.currently.temperature} degrees out. There is ${body.currently.precipProbability} chance of rain`)
        }
    })
}

module.exports = forecast;