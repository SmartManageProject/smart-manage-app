import axios from "axios";


//cria a url base para fazer as requests no back-end
export const Api = axios.create({
  baseURL: ""
})