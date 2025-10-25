import axios from 'axios';

// Configuración global de axios
axios.defaults.baseURL = 'http://localhost:8080/api';
axios.defaults.withCredentials = true; // Importante para cookies de sesión

// Interceptor para manejar errores globalmente
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('Error de API:', error);
    return Promise.reject(error);
  }
);

export default axios;