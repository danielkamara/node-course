const express = require('express'),
    path = require('path'),
    hbs = require('hbs'),
    forecast = require('./utils/forecast'),
    geocode = require('./utils/geocode')

const app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '/templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Daniel Kamara'
    })
})


app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Daniel Kamara'
    })
})


app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Daniel Kamara'
    })
})


app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            err: 'You must provide an address'
        })
    }

    geocode(req.query.address, (err, {
        lat,
        lon,
        location
    } = {}) => {
        if (err) {
            return res.send({
                err
            })
        }
        forecast(lat, lon, (err, forecastData) => {
            if (err) {
                return res.send({
                    err
                })
            }

            res.send({
                forecast: forecastData,
                location,
                address: req.query.address
            })
        })
    })
})

app.get('/products', (req, res) => {
    if (!req.query.search) {
        return res.send({
            err: 'You must provide a search term'
        })
    }
    console.log(req.query.search)
    res.send({
        products: []
    })
})


app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Daniel',
        errorMessage: 'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Daniel',
        errorMessage: 'Page Not Found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on: http://localhost:3000/')
})