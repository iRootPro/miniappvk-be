const {Schema, model, ObjectId} = require("mongoose")

const User = new Schema({
    coin: {type: Number, default: 0},
    user_vk_id: {type: Number, required: true},
    message: [{type: String}],
    comment_id: {type: Number, default: 0}
    first_name: {type: String},
    last_name: {type: String},
    avatar: {type: String},
})

module.exports = model('User', User)
