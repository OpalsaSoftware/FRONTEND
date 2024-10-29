import axios from "axios";

// Crea una instancia de Axios
const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,  // Usar la variable de entorno para la URL base
  withCredentials: true // Permitir que Axios envíe cookies con las solicitudes
});

// Interceptor para añadir el token en cada solicitu

export default instance;
