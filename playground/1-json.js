const fs = require('fs');
const data = fs.readFileSync('1-json.json').toString();

const bioData = JSON.parse(data);

bioData.name = 'sarath';
bioData.age = '25';

fs.writeFileSync('1-json.json', JSON.stringify(bioData));

console.log(bioData)