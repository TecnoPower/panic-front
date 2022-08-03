import axios from 'axios';

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASEURL_BACKEND,
    timeout: 5000,
    headers: { 'Content-Type': 'application/json' }
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers = {
            ...config.headers,
            "x-access-token": token
        }
    }
    return config
});

axiosInstance.interceptors.response.use((response) => {
    return response
});