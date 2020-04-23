const express = require('express')
    require('./db/mongoose')
    userRouter = require('./routers/user')
    taskRouter = require('./routers/task')


app = express()
port = process.env.PORT || 3000




// app.use((req, res, next) => {
//    if (req.method === 'GET') {
//     res.send('GET request are disabled')
//    }else {
//        next()
//    }
// })

app.use((req, res, next) => {
    res.status(503).send('Site is under maintenance, Come back later!')
})





app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

const jwt = require('jsonwebtoken')





const bcrypt = require('bcryptjs')


const myFunction = async () => {
const token = jwt.sign({ _id: 'abc123'}, 'thisisagreatpassword', { expiresIn: '7 days'} )

console.log(token)

const data = jwt.verify(token, 'thisisagreatpassword')
console.log(data)
}



myFunction()