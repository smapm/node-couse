const geocode = require('./utils/geocoding');
const forecast = require('./utils/forecast');

const address = process.argv[2];

if(!address){
    return console.log('Please provide address');
    
}

geocode(address, (error, locationInfo) =>{
    if(error){
       return console.log(error);
    }
    const {latitude, longitude, location} = locationInfo;
    forecast(latitude, longitude, (error, data) =>{
        if(error){
            return console.log( error);
        }
        console.log(location);
        console.log(data);
    });
});
