import axios from 'axios';

export default axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  headers: {
    'Content-Type': 'application/json',
  },
});
