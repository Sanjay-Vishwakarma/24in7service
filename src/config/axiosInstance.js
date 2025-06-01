import axios from "axios";

// const API_BASE_URL = "http://localhost:9090/api/v1";
const API_BASE_URL = "https://maidserviceprovider.onrender.com/api/v1";


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: { "Content-Type": "application/json" },
});

export default axiosInstance;


