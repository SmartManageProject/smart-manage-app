import { Api } from "../../service/api";
import { IUser } from "./types";


//guarda a autenticação do usuário no local storage
export function setUserLocalStorage (user: IUser | null) {
  localStorage.setItem('user', JSON.stringify(user) )
}

//pegar os dados do local storage
export function getUserLocalStorage() {
  //pega o item do local storage
  const json = localStorage.getItem('user')

  //se for null ele retorna null como resposta
  if (!json) {
    return null;
  }

  //se não for null ele pega os dados
  const user = JSON.parse(json);

  //retorna o usuário, caso esteja vazio tbm retorna um null
  return user ?? null;
}

// faz o login do usuário na api do back-end
export async function LoginResquest(email: string, password: string) {
  try {
    const request = await Api.post("login", { email, password });
    return request.data;
  } catch (error) {
    return error;
  }
}
