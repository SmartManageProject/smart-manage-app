import axios from "axios";
import { getUserLocalStorage } from "../Context/AuthProvider/Util";
import { io } from "socket.io-client";

export const Api = axios.create({
  baseURL: "https://smartmanage-api-ieme.onrender.com/",
});

export const socket = io("wss://smartmanage-api-ieme.onrender.com/", {
  autoConnect: false,
});

Api.interceptors.request.use(
  (config) => {
    const user = getUserLocalStorage();
    config.headers.Authorization = `Bearer ${user?.token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
