import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // URL base da sua API
    headers: {
        'Content-Type': 'application/json',
        // outras configurações de cabeçalho, se necessário
    }
});

export default api;