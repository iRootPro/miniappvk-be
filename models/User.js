const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    coin: {type: Number, default: 0},
    user_vk_id: {type: String, required: true}
})

module.exports = model('User', User)
