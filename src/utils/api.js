const axios = require('axios').default;

function headers() {
  return { headers: { Authorization: `Bearer ${localStorage.getItem('api_key') !== null ? JSON.parse(localStorage.getItem('api_key')).key : ''}` } };
}

const apiUrl = process.env.VUE_APP_API_URL;

module.exports = {
  delete: (path) => axios.delete(`${apiUrl}${path}`, headers()),
  get: (path) => axios.get(`${apiUrl}${path}`, headers()),
  post: (path, data) => axios.post(`${apiUrl}${path}`, data, headers()),
  put: (path, data) => axios.put(`${apiUrl}${path}`, data, headers()),
};
