import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginResquest, getUserLocalStorage, setUserLocalStorage } from "./Util";

//cria o contexto de autenticação usando a interface IContext
export const AuthContext = createContext<IContext>({} as IContext);

//cria e retorna o provedor do contexto de autenticação
export const AuthProvider = ({ children }: IAuthProvider) => {

  //cria o usuario
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage()

    if(user) {
      setUser(user)
    }

  }, [])



  //função que autentica o usuario, recebendo o email e senha
  async function authenticate(email: string, password: string) {
    //pega a resposta da requisição de login da API
    const reponse = await LoginResquest(email, password);

    //guarda a resposta da API com o token e o email
    const payload = { token: reponse.token, email };

    //armazena em memória o usuario
    setUser(payload);
    //armazena no local storage
    setUserLocalStorage(payload);
  }

  //faz o logout da conta
  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
