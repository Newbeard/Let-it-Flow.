import axios from 'axios';

export const axiosWithConfig = axios.create({
  baseURL:'http://localhost:4000/'
})
