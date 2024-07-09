// axiosInstance.js
import axios from 'axios';

// Create an Axios instance with default headers
const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000', // Replace with your API's base URL
  timeout: 5000, // Adjust as needed
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
