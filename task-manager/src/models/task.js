const mongoose = require('mongoose')



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
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,  
        ref: 'User'
    }
})

module.exports = Task