// axiosConfig.js
import axios from 'axios';

export const setupAxiosInterceptor = (navigate) => {
  axios.interceptors.response.use(
    (response) => response, // Return the response if everything is fine
    (error) => {
      if (error.response && error.response.status === 401) {
        // Token expired or user is unauthorized
        localStorage.removeItem('token'); // Clear the token
        navigate('/client-login', { state: { message: 'Session expired. Please log in again.' } }); // Redirect with message
      }
      return Promise.reject(error); // Reject the promise
    }
  );
};
