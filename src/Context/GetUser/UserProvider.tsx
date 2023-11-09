import { createContext, useEffect, useState } from "react";
import { IUserLogged, IUserLoggedContext, IUserLoggedProvider } from "./types";
import { getUserData } from "./Util";
import { getUserLocalStorage } from "../AuthProvider/Util";

export const UserContext = createContext<IUserLoggedContext>(
  {} as IUserLoggedContext
);

export const UserPorvider = ({ children }: IUserLoggedProvider) => {
  const [userLogged, setUserLogged] = useState<IUserLogged>();

  const user = getUserLocalStorage();
  useEffect(() => {

    const fetchData = async () => {
      const userId = user.id
      const userLoggedResponse = await getUserData({userId});


      setUserLogged({name: userLoggedResponse.name, role:userLoggedResponse.role,});
      
    }

    fetchData()
  }, [])

  function getName() {
    return userLogged?.name;
  }
  function getRole() {
    return userLogged?.role;
  }

  return (
    <UserContext.Provider value={{ ...userLogged, getName, getRole }}>
      {children}
    </UserContext.Provider>
  );
};
