import axios from 'axios';

const API_URL = 'https://api.example.com'; // Reemplaza con la URL de tu API

// funcion para enviar los datos de login a la API
export const login = (username, password) => {
  // envia una solicitud POST a la ruta de login de la API con el nombre de usuario y la contraseña
  return axios.post(`${API_URL}/login`, { username, password });
};
