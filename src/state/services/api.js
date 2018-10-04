/* eslint-disable */
import axios from 'axios'

let baseURL = 'http://localhost:5263/'

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.defaults.headers.common['Authorization'] = `Bearer ba721f9895d5cebe18697546d08580b3bd7faee8`

export default instance
