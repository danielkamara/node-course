// CRUD Create Read Update Delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)
    // db.collection('users').insertOne({
    //     name: 'Daniel',
    //     age: 200
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user')
    //     }

    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([{
    //     name: 'Sharde',
    //     age: 31
    // }, {
    //     name: 'Thomas',
    //     age: 50
    // }], (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert documents!')
    //     }
    //     console.log(result.ops)
    // })
    db.collection('tasks').insertMany([
        {
            description: 'mop the floor',
            completed: true
        }, {
            description: 'Pick up dry cleaning',
            completed: false
        }, {
            description: 'wash the car',
            completed: false
        }
    ], (err, res) => {
        if (err) {
            return console.log("Unable to insert task!")
        } 
        console.log(res.ops)
    })
})