const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#message-1')
const msg2 = document.querySelector('#message-2')


msg1.textContent = 'From JavaScript'


weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value

        msg1.textContent = 'Loading...'
        msg2.textContent = ''



    fetch('http://localhost:3000/weather?address=' + location).then((res) => {
        res.json().then((data) => {
            if (data.err) {
                msg1.textContent = data.err
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecast
            }
        })
    })
})