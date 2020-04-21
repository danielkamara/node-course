const mongoose = require('mongoose'),
    validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})

// Add a password field to User
// 1. Setup the field as a required string
// 2. Ensure the length is greater than 6
// 3. Trim the password
// 4. Ensure the password doesn't contain "password"

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
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    }
})

// const me = new User({
//     name: '     Daniel     ',
//     email: ' MyEmail@kamaraSON.io    ',
//     password: 'dsaasdasd123'
// })


// me.save().then(() => {
//     console.log(me)
// }).catch((err) => {
//     console.log('Error!', err)
// })



// 1. Define the model description and completed fields
const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
})

// 2. Create a new instance of the model
const task = new Task({
    description: 'Eat dinner'
})

// 3. Save the model to the database
task.save().then(() => {
console.log(task)
}).catch((err) => {
console.log(err)
}) 