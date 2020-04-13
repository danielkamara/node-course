const https = require('https')

const url = 'https://api.weatherstack.com/current?access_key=3d304656ef7f6161a07ee943a166b46e&query=45,-75&units=f'

const request = https.request(url, (res) => {
    let data = ''

    res.on('data', (chunk) => {
        data = data + chunk.toString()
    })

    res.on('end', () => {
const body = JSON.parse(data)
console.log(body)
    })

})



request.on('error', (err) => {
console.log('An error', err)
})


request.end()