import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL_V1,
});

// Set global headers
// instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
// console.log(token)

export default instance;