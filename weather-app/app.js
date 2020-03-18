const request = require('request');

const url = 'https://api.darksky.net/forecast/ef60cff5b82d5745cf8902d20b88d6e9/37.8267,-122.4233'

request({url : url, json:true}, (error, response) =>{
    const data = response.body.currently;
    console.log(`it is currently ${data.temperature} degree and ${data.precipProbability}% chance of rain`);
});