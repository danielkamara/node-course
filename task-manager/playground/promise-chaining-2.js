require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('5e9f41d7a72ec90e7e0bd143').then((task) => {
//     console.log(task)
//     return Task.countDocuments({
//         completed: false
//     })
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id) 
    const count = await Task.countDocuments({ completed: false})
    return count
}

deleteTaskAndCount('5e9e584aa0908028f9e25e97').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})
