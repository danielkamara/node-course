const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value


    fetch('http://localhost:3000/weather?address=' + location).then((res) => {
        res.json().then((data) => {
            if (data.err) {
                console.log(data.err)
            } else {
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})