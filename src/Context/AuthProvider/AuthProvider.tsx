import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import {
  CreateUser,
  LoginResquest,
  getUserLocalStorage,
  setUserLocalStorage,
} from "./Util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(
    email: string | null | undefined,
    password: string | null | undefined
  ) {
    const response = await LoginResquest(email, password);
    if (response.token !== undefined) {
      const payload = { id: response.id, token: response.token };
      setUser(payload);
      setUserLocalStorage(payload);
    } else {
      throw new Error("Usuário não autenticado");
    }
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  async function createUser(
    name: string | null | undefined,
    email: string | null | undefined,
    password: string | null | undefined,
    role: string | null | undefined
  ) {
    const response = await CreateUser(name, email, password, role).then(({response})=> response.data);
    if (response.status === 400) {
      throw new Error(response.message);
    }
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout, createUser }}>
      {children}
    </AuthContext.Provider>
  );
};
