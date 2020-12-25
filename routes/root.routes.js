const Router = require('express')
const router = Router()

router.post('/', (req, res) => {
    console.log(req)
        res.send('91a4d37c')
    }
)

module.exports = router
