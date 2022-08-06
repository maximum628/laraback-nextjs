import axios from 'axios';
// require('dotenv').config();

// ----------------------------------------------------------------------
const axiosInstance = axios.create({ baseURL: process.env.BASE_SERVER_URL || '' });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;
