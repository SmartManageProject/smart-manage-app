import { createContext, useEffect, useState } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { LoginResquest, getUserLocalStorage, setUserLocalStorage } from "./Util";

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: IAuthProvider) => {

  const [user, setUser] = useState<IUser | null>();

  useEffect(() => {
    const user = getUserLocalStorage()

    if(user) {
      setUser(user)
    }

  }, [])

  async function authenticate(email: string, password: string) {
    const response = await LoginResquest(email, password);
    if(response.token !== undefined){
      const payload = {id: response.id, token: response.token};
      setUser(payload);
      setUserLocalStorage(payload);
    }

  }

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
