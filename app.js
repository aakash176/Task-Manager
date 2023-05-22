const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const db = require('./db/connect')
require('dotenv').config()
//require('./db/connect')
const port = 8080

// app.get('/home', (req,res) => {
//     res.send('Task tracker homepage...')
// })

app.use(express.static('./public'));
app.use(express.json())
app.use('/api/v1/tasks', tasks)

async function start(){
    try{
        await db(process.env.MONGO_URI)
        app.listen(port, () =>{console.log(`app is listening to port ${port}`)})
    } catch(err) {console.log(err)}
}

start()

