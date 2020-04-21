const mongoose = require('mongoose'),
    validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

const me = new User({
    name: '     Daniel     ',
    email: ' MyEmail@kamaraSON.io    '
})


me.save().then(() => {
    console.log(me)
}).catch((err) => {
    console.log('Error!', err)
})



// 1. Define the model description and completed fields
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean
    }
})

// 2. Create a new instance of the model
// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: false
// })

// 3. Save the model to the database
// task.save().then(() => {
// console.log(task)
// }).catch((err) => {
// console.log(err)
// }) 