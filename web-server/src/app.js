const path = require('path');
const hbs = require('hbs');
const express = require('express');
const app = express();

app.listen(3000, () =>{
    console.log('server up and running!');  
});

const rootdir = path.join(__dirname, '../public');
const templatedir = path.join(__dirname, '../templates/views');
const partialsdir = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs')
app.set('views', templatedir)
hbs.registerPartials(partialsdir)

app.use(express.static(rootdir))

app.get('', (req, res) =>{
    res.render('index',{
        title : 'Weather',
        name: 'Sarath'
    });
})

app.get('/about', (req, res) =>{
    res.render('about',{
        title : 'About me',
        name: 'Sarath'
    });
})

app.get('/help', (req, res) =>{
    res.render('help',{
        title : 'Help',
        name: 'Sarath'
    });
})

app.get('/weather',(req, res) =>{
    if(!req.query.address){
        return res.send({error: "Address must be provided"})
    }
    res.send({name: 'sarath'})
})

app.get('/help/*', (req, res) =>{
   res.render('404',{
    title : 'Help article not found',
    name: 'Sarath'   
   })
})

app.get('*', (req, res) =>{
    res.render('404',{
        title : '404 Not found'
       })
})

