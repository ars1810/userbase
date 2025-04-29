import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:8080/api', // backend endpoint kamu
});

export default API;
