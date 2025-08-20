import axios from "axios";

// const API_BASE_URL = "http://localhost:9090/api/v1";
const API_BASE_URL = "https://maidserviceprovider.onrender.com/api/v1";


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    // headers: { "Content-Type": "application/json" },
    // withCredentials: true // Important for session cookies
});


// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");  
    
        // Add token only if it exists
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);


export default axiosInstance;


