const axios = require('axios');

export const moviesClient = axios.create({
  baseURL: 'http://localhost:5000',
});
