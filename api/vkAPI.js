const axios = require('axios');


const instance = axios.create({
    baseURL: 'https://api.vk.com/method/',
    withCredentials: true
})

const vkAPI = {
    async getUserInfo(id) {
        return instance.get(`users.get?user_id=${id}&access_token=d4faa8e9d4faa8e9d4faa8e993d48f0037dd4fad4faa8e98b1da2eb2cb357364c38d2ea&v=5.52&fields=photo_50`)
    },

    async getUserPhoto(id) {
        return instance.get(`photos.get?user_id=${id}&access_token=d4faa8e9d4faa8e9d4faa8e993d48f0037dd4fad4faa8e98b1da2eb2cb357364c38d2ea&v=5.52`)
    }
}

module.exports = vkAPI
