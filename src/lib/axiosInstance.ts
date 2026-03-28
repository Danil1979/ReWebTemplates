import axios from 'axios'

// You can configure this with an environment variable for the base URL.
// const baseURL = import.meta.env.VITE_API_URL || 'https://api.example.com'

export const axiosInstance = axios.create({
  // baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
})
