import { createContext,  useState } from "react";
import { IUserLogged, IUserLoggedContext, IUserLoggedProvider } from "./types";
import { getUserData } from "./Util";
import { getUserLocalStorage } from "../AuthProvider/Util";

export const UserContext = createContext<IUserLoggedContext>(
  {} as IUserLoggedContext
);

export const UserPorvider = ({ children }: IUserLoggedProvider) => {
  const [userLogged, setUserLogget] = useState<IUserLogged | null>();

  const user = getUserLocalStorage();

  async () => {
    const userLogged = await getUserData(user);
    if (userLogged) {
      setUserLogget(userLogged);
    }
  };

  function getName() {
    return userLogged?.name 
  }  
  function getRole() {
    return userLogged?.role
  }



  return (
    <UserContext.Provider value={{...userLogged, getName, getRole}}>
      {children}
    </UserContext.Provider>
  );
};
