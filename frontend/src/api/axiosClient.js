import axios from 'axios';

const axiosClient = axios.create({
    // Spring Boot backend URL
    baseURL: "http://localhost:8080",
    headers: {
    "Content-Type": "application/json",
  },
});

export default axiosClient;