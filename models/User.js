const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    coin: {type: Number, default: 0},
    user_vk_id: {type: Number, required: true},
    message: [{type: String}],
    post_id: Number
})

module.exports = model('User', User)
