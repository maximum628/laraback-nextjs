import axios from 'axios';
// require('dotenv').config();

// ----------------------------------------------------------------------
console.log(process.env.BASE_SERVER_URL,555);
const axiosInstance = axios.create({ baseURL: process.env.BASE_SERVER_URL || '' });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
