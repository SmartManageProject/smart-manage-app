import axios from "axios";
import { getUserLocalStorage } from "../Context/AuthProvider/Util";

export const Api = axios.create({
  baseURL: "https://smartmanage-api-ieme.onrender.com/"
})

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage()
    config.headers.Authorization = `Bearer ${user?.token}` 
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);