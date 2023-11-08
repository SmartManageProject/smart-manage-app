import { createContext, useEffect, useState } from "react";
import { IUserLogged, IUserLoggedContext, IUserLoggedProvider } from "./types";
import { getUserData } from "./Util";
import { getUserLocalStorage } from "../AuthProvider/Util";

export const UserContext = createContext<IUserLoggedContext>(
  {} as IUserLoggedContext
);

export const UserPorvider = ({ children }: IUserLoggedProvider) => {
  const [userLogged, setUserLogget] = useState<IUserLogged | null>();

  const user = getUserLocalStorage();

  useEffect(() => {
    const userLogged = getUserData(user);

    if (userLogged) {
      setUserLogget(userLogged);
    }
  }, []);

  return (
    <UserContext.Provider value={{ ...userLogged }}>
      {children}
    </UserContext.Provider>
  );
};
