const path = require('path'),
express = require('express'),
app = express()

app.get('/', (req, res) => {
    res.send('<h1>Weather</h1>')
})







app.use()


app.get('/help', (req, res) => {
    res.send([{
        name: 'Daniel',
    }, {
        name: 'Phylicia'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About Section</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        name: 'Texas',
        weather: 'cold'
    },)
})






















app.listen(3000, () => {
    console.log('Server is up on: http://localhost:3000/')
})