const Router = require('express')
const router = Router()

router.post('/', (req, res) => {
        console.log(req)
        // registration Server on vk
        // res.status(200).send('91a4d37c')
    }
)

router.get('/', (req, res) => {
    res.status(200).json({message: 'ok'})
})

module.exports = router
