const express = require('express')
const config = require('config')
const mongoose = require('mongoose')
const rootRouter = require('./routes/root.routes')
const app = express()
const PORT = config.get('serverPort')
const dbURL = config.get('dbURL')

app.use(express.json())
app.use('', rootRouter)


const start = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log('Connected to DB...')
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT} port...`)
        })
    }
    catch (e) {
        console.log(e)
    }
}

start()

