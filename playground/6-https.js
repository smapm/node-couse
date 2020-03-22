const https = require('https');

const url = `https://api.darksky.net/forecast/ef60cff5b82d5745cf8902d20b88d6e9/-40,20?units=si`;
   
const forecast = https.request(url,(response) =>{

    let data = '';

    response.on('data', d =>{
        data += d.toString();
    });
    response.on('end', e =>{
        console.log(data);
        
    });
});

forecast.on('error', () =>{
    console.log('fuck u');
    
})

forecast.end();
