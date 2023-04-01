import axios from 'axios';

// TODO: move base url and key to .env file
const instance = axios.create({
  baseURL: 'https://api.thedogapi.com/v1',
  headers: {
    'x-api-key': '317c6d89-8467-4c2f-aac6-1d06bb975409',
    common: {
      'Content-Type': 'application/json',
    },
  },
});

export default instance;