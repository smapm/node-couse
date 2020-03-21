const request = require('request');

const url = 'https://api.darksky.net/forecast/ef60cff5b82d5745cf8902d20b88d6e9/37.8267,-122.4233';
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic21hcG0iLCJhIjoiY2s4MWFoamxzMDVhbTNmcGdreGdpbnFndCJ9.ggOjrcXDp44-WRkM3Cp-XA&limit=1';

request({url : url, json:true}, (error, response) =>{
    if(error){
        console.log('unable to connect to weather service')
    }
    else if(response.body.error){
        console.log('Unable to find location');
    }else{
        const data = response.body.currently;
        console.log(`it is currently ${data.temperature} degree and ${data.precipProbability}% chance of rain`);
    }   
});

request({url : geoUrl, json: true}, (error, response) =>{
    if(error){
        console.log('unable to connect to location service')
    }
    else if(response.body.features.length === 0){
        console.log('Incorrect location provided');
    }else{
    const data = response.body.features[0].center
    console.log(`latitude ${data[1]}, longitude ${data[0]}`)
    }
});