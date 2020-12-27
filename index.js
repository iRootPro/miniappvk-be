const express = require('express')
const https = require('https')
const config = require('config')
const mongoose = require('mongoose')
const fs = require("fs")
const path = require("path")
const rootRouter = require('./routes/root.routes')
const app = express()
const PORT = config.get('serverPort')
const dbURL = config.get('dbURL')

app.use(express.json())
app.use('', rootRouter)

const httpsOptions = {
    cert: fs.readdirSync(path.join(__dirname, 'ssl', 'server.crt')),
    key: fs.readdirSync(path.join(__dirname, 'ssl', 'server.key'))
}


const start = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log('Connected to DB...')
        https.createServer(httpsOptions, app).listen(PORT, () => {
            console.log(`Server started on ${PORT} port...`)
        })

        // app.listen(PORT, () => {
        //     console.log(`Server started on ${PORT} port...`)
        // })
    } catch (e) {
        console.log(e)
    }
}

start()

