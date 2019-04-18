import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistackleite-backend.herokuapp.com',
});

export default api;