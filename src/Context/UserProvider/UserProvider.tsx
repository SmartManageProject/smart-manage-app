import { createContext, useEffect, useState } from "react";
import {
  IUserLogged,
  IUserLoggedContext,
  IUserLoggedProvider,
  Project,
} from "./types";
import { getProjects, getUserData } from "./Util";
import { getUserLocalStorage } from "../AuthProvider/Util";

export const UserContext = createContext<IUserLoggedContext>(
  {} as IUserLoggedContext
);
export const UserPorvider = ({ children }: IUserLoggedProvider) => {
  const [userLogged, setUserLogged] = useState<IUserLogged>();
  const user = getUserLocalStorage();
  useEffect(() => {
    const fetchData = async () => {
      const userId = user.id;
      const userLoggedResponse = await getUserData({ userId });
      setUserLogged({
        name: userLoggedResponse.name,
        role: userLoggedResponse.role,
      });
    };
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function getName() {
    return userLogged?.name;
  }
  async function getRole() {
    return userLogged?.role;
  }
  async function getProjectsData(): Promise<Project[] | undefined > {
    const projects = await getProjects();
    return projects;
  }
  return (
    <UserContext.Provider
      value={{ ...userLogged, getName, getRole, getProjectsData }}
    >
      {children}
    </UserContext.Provider>
  );
};
