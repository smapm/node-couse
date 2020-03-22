const path = require('path');
const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log('server up and running!');  
});

const rootdir = path.join(__dirname, '../public');
const templatedir = path.join(__dirname, '../templates')

app.set('view engine', 'hbs');
app.set('views', templatedir)

app.use(express.static(rootdir));

app.get('', (req, res) =>{
    res.render('index',{
        title : 'CORONA'
    });
})

app.get('/about', (req, res) =>{
    res.render('about',{
        title : 'About Corona'
    });
})

app.get('/help', (req, res) =>{
    res.render('help',{
        title : 'Help corona'
    });
})

app.get('/weather',(req, res) =>{
    res.send({name: 'sarath'})
})