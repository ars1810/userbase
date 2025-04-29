import axios from 'axios';

const API = axios.create({
  baseURL: 'https://userbase-2.onrender.com/api'  // Ini URL backend kamu di Render
});

export default API;
