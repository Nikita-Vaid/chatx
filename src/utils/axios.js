import axios from 'axios';  // Import axios from the axios library

// Import your configuration
import { BASE_URL } from '../config';

// Create an axios instance with the base URL
const axiosInstance = axios.create({baseURL: BASE_URL});

// Set up an interceptor to handle responses
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = (error.response && error.response.data) || 'Something went wrong';
    return Promise.reject(errorMessage);
  }
);

// Export the configured axios instance
export default axiosInstance;
