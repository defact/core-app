import axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(axios, { retries: 3 });

const enhancedError = (err) => {
  console.error(err);
  const error = new Error(err.message || err);
  error.message = err.message;
  error.statusCode = err.statusCode;
  return error;
};

const api = () => {
  const token = localStorage.getItem('token');

  const request = axios.create({
    baseURL: '/api',
    timeout: 3000,
    headers: { Authorization: `Bearer ${token}` },
    transformResponse: [response => {
      if (response.length === 0) return;
      const data = JSON.parse(response);
      if (data.statusCode) throw enhancedError(data);
      return data;
    }],
  });
  
  const extract = data => data.data;

  return {
    get: async (url, query) => request.get(url, query).then(extract),
    post: async (url, data) => request.post(url, data).then(extract),
    put: async (url, data) => request.put(url, data).then(extract),
    delete: async (url, data) => request.delete(url, data).then(extract),
  }
};

export default api;