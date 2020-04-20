const doWorkPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([1, 2, 3])
        reject('Things did not go well!!!')
        resolve([2, 3, 3])
    }, 2000)
})


doWorkPromise.then((res) => {
console.log('Success!', res)
}).catch((err) => {
    console.log('Error!!', err)
})

