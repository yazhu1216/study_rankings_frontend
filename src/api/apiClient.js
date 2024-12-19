import axios from 'axios';
import { useAuth } from "../contexts/AuthContext";

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',  
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, 
});


const setupInterceptors = () => {
  apiClient.interceptors.request.use(
    (config) => {
      const { accessToken } = useAuth();
      if (accessToken) {
        config.headers['Authorization'] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};

export { apiClient, setupInterceptors };