const axios = require('axios');


const instance = axios.create({
    baseURL: 'https://api.vk.com/method/',
    withCredentials: true
})

const vkAPI = {
    async getUserInfo(id) {
        return instance.get(`users.get?user_id=${id}&v=5.52`)
    }
}

module.exports = vkAPI
