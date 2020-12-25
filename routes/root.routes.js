const Router = require('express')
const router = Router()

router.post('/', (req, res) => {
    console.log(req)
        res.status(200).send('91a4d37c')
    }
)

module.exports = router
