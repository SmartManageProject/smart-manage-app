import axios from "axios";
import { getUserLocalStorage } from "../Context/AuthProvider/Util";


//cria a url base para fazer as requests no back-end
export const Api = axios.create({
  baseURL: "http://localhost:3000"
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