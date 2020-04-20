const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
})

// const me = new User({
//     name: 'Daniel',
//     age: 36
// })


// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log('Error!', err)
// })



// 1. Define the model description and completed fields
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// 2. Create a new instance of the model
const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

// 3. Save the model to the database
task.save().then(() => {
console.log(task)
}).catch((err) => {
console.log(err)
}) 