import axios from 'axios';

const baseURL = process.env.GITHUB_URL;

const api = axios.create({
  baseURL,
});

export default api;
