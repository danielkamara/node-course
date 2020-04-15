const path = require('path'),
    express = require('express'),
    app = express()


// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '/templates')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

// Setup static directory to serve
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
        text: 'This is a message to see if things worked.'
    })
})


app.get('/weather', (req, res) => {
    res.send({
        name: 'Texas',
        weather: 'cold'
    }, )
})




app.listen(3000, () => {
    console.log('Server is up on: http://localhost:3000/')
})