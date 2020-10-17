import axios from 'axios';

const api = axios.create({
  baseURL: 'https://15okzp63u6.execute-api.us-east-1.amazonaws.com/dev'
});

export default api;