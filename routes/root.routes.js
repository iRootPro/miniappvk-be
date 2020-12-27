
const Router = require('express')
const User = require('./../models/User')
const vkAPI = require('./../api/vkAPI')
const router = Router()

router.post('/', async (req, res) => {
        if (req.body.type !== 'wall_reply_new') {
            return
        }
        const existUser = await User.findOne({user_vk_id: req.body.object.from_id})
        if (!existUser) {
            const vkUserInfo = await vkAPI.getUserInfo(req.body.object.from_id)
                .then(res =>{
                    return res.data
                })
            console.log('###', vkUserInfo.response.first_name)
            const newUser = new User({
                first_name: vkUserInfo.first_name,
                last_name: vkUserInfo.last_name,
                avatar: vkUserInfo.photo_50,
                coin: 1,
                user_vk_id: req.body.object.from_id,
                message: [].push(req.body.object.text),
                comment_id: 0
            })
            await newUser.save()
            console.log(`New user with #id: ${req.body.object.from_id} saved in DB`)
            return
        } else {
            if (existUser.comment_id < req.body.object.id) {
                existUser.coin += 1
                existUser.message.push(req.body.object.text)
                existUser.comment_id = req.body.object.id
                await existUser.save()
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
        const user = await User.findOne({user_vk_id: req.query.id})
        return res.status(200).json(user)
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: 'Error get user info'})
    }

})


router.get('/rating', async (req, res) => {
    try {
        const users = await User.find().sort({coin: -1})
        if (users.length > 0) {
            return res.status(200).json(users)
        }
        res.status(200).json({message: 'Рейтинг выводится только если в базе более 1 пользователя'})
    } catch (e) {
        console.log(e)
        return res.status(400).json({message: 'Error get rating info'})
    }

})

module.exports = router
