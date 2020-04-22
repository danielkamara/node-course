require('../src/db/mongoose')
const Task = require('../src/models/task')


Task.findByIdAndDelete('5e9f41d7a72ec90e7e0bd143').then((task) => {
    console.log(task)
    return Task.countDocuments({
        completed: false
    })
}).then((result) => {
    console.log(result)
}).catch((e) => {
    console.log(e)
})