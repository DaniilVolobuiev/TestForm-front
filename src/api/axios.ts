import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://polar-waters-40617.herokuapp.com',
});

instance.interceptors.request.use((config) => {
  return config;
});

export default instance;
