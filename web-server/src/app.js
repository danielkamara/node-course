const path = require('path'),
express = require('express')

app = express()


const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))







app.get('/weather', (req, res) => {
    res.send({
        name: 'Texas',
        weather: 'cold'
    },)
})






















app.listen(3000, () => {
    console.log('Server is up on: http://localhost:3000/')
})