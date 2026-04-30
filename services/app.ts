import axios from "axios";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_BASE_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  response => response,
  error => {
    console.log("API Error:", error?.response?.data || error.message);
    return Promise.reject(error);
  }
);

export default api;