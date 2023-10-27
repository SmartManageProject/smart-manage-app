import axios from "axios";
import { getUserLocalStorage } from "../Context/AuthProvider/Util";


//cria a url base para fazer as requests no back-end
export const Api = axios.create({
  baseURL: ""
})

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage()

    config.headers.Authorization = user?.token

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);