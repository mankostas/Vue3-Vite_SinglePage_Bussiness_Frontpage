import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    }
})

export default {
   
    getTestimonials() {
        return apiClient.get('/posts')
    },
}