import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8096/api', // Backend API base URL
  headers: {
    'Content-Type': 'application/json',
  }
});

export default axiosInstance;
