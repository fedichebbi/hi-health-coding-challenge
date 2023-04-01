import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'x-api-key': process.env.REACT_APP_API_KEY,
    common: {
      'Content-Type': 'application/json',
    },
  },
});

export default instance;