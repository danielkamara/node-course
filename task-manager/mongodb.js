// CRUD Create Read Update Delete


const {
    MongoClient,
    ObjectID
} = require('mongodb')


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

        db.collection('users').findOne({
                    _id: new ObjectID("5e9dc15b7c87c104fa7bcfef")
                }, (error, user) => {
    if (err) {
        return console.log('Unable to fetch')
    }
    console.log(user)
        })

    db.collection('users').find({
        age: 20
    }).toArray((err, users) => {
        console.log(users)
    })
    db.collection('users').find({
        age: 20
    }).count((err, count) => {
        console.log(count)
    })
})