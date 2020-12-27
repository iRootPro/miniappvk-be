import axios from "axios";


const instance = axios.create({
    baseURL: 'https://api.vk.com/method/',
    withCredentials: true
})

export const vkAPI = {
    async getUserInfo(id) {
        return instance.get(`users.get?user_id=${id}&v=5.52`)
    }
}
