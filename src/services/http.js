import axios from 'axios'

let API_URL = process.env.VUE_APP_API_URL
let API_URL_2 = process.env.VUE_APP_API_URL_2

const api = axios.create({
    baseURL: API_URL,
})

const api2 = axios.create({
    baseURL: API_URL_2,
})

const HTTP = {
    get(url, data, api2) { 
        return api2 ? api2.get(`${url}`, data) : api.get(`${url}`, data) 
    },
    post(url, data, api2) { 
        return api2 ? api2.post(`${url}`, data) : api.get(`${url}`, data) 
    },
    put(url, data, api2) { 
        return api2 ? api2.put(`${url}`, data) : api.get(`${url}`, data) 
    },
    init() {    
        // Intercept the request to make sure the token is injected into the header.
        api.interceptors.request.use((config) => {
            const token = localStorage.getItem('bearer')
            if (token !== '' || token) {
                config.headers.Authorization = `Bearer ${token}`
            }     
            return config
        })
    }
}

export default HTTP;