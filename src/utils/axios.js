// src/api/axios.js
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://api.mytimewatch.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

const api = {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  delete: axiosInstance.delete,
};

export default api;
