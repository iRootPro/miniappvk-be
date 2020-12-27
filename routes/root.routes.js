const Router = require('express')
const User = require('./../models/User')
const router = Router()

router.post('/', async (req, res) => {
        if (req.body.type !== 'wall_reply_new') {
            return
        }
        const existUser = await User.findOne({user_vk_id: req.body.object.from_id})
        console.log('### user:', existUser)
        // registration Server on vk
        // res.status(200).send('91a4d37c')
    }
)

router.get('/', (req, res) => {
    res.status(200).json({message: 'ok'})
})

module.exports = router
