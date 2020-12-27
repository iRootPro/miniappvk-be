const Router = require('express')
const User = require('./../models/User')
const router = Router()

router.post('/', async (req, res) => {
    console.log(req.body)
        if (req.body.type !== 'wall_reply_new') {
            return
        }
        const existUser = await User.findOne({user_vk_id: req.body.object.from_id})
        if (!existUser) {
            const newUser = new User({
                coin: 1,
                user_vk_id: req.body.object.from_id,
                message: [].push(req.body.object.text),
                comment_id: null
            })
            await newUser.save()
            console.log(`New user with #id: ${req.body.object.from_id} saved in DB`)
            return
        } else {
            if (existUser.comment_id < req.body.object.id) {
                existUser.coin += 1
                existUser.message.push(req.body.object.text)
                existUser.comment_id = req.body.object.comment_id
                existUser.save()
                console.log(`User with #id: ${req.body.object.from_id} updated`)
                return
            }
            return
        }
        // registration Server on vk
        // res.status(200).send('91a4d37c')
    }
)

router.get('/', async (req, res) => {
    try {
        console.log(req.query.id)
        const user = await User.findOne({user_vk_id: req.query.id})
        res.status(200).json(user)
    } catch (e) {
        console.log(e)
        res.status(400).json({message: 'Error get user info'})
    }

})

module.exports = router
