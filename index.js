const express = require('express')
const config = require('config')
const rootRouter = require('./routes/root.routes')
const app = express()
const PORT = config.get('serverPort')


app.use(express.json())
app.use('', rootRouter)


app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port...`)
})
