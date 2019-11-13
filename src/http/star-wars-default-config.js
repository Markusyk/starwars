import axios from 'axios';

export default axios.create({
    baseURL: 'https://swapi.co/api/',
    timeout: 30000,
});
