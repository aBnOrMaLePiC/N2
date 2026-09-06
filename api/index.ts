import axios from 'axios'

const Axios = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
})

export default Axios