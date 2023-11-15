import { createContext, useEffect, useState } from "react";
import {
  IUser,
  IUserLogged,
  IUserLoggedContext,
  IUserLoggedProvider,
  Project,
} from "./types";
import { createProject, getProjects, getUserData, getusers } from "./Util";
import { getUserLocalStorage } from "../AuthProvider/Util";

export const UserContext = createContext<IUserLoggedContext>(
  {} as IUserLoggedContext
);
export const UserPorvider = ({ children }: IUserLoggedProvider) => {
  const [userLogged, setUserLogged] = useState<IUserLogged>();
  const user = getUserLocalStorage();
  useEffect(() => {
    const fetchData = async () => {
      const userId = user?.id;
      const userLoggedResponse = await getUserData({ userId });
      setUserLogged({
        id: userLoggedResponse.id,
        name: userLoggedResponse.name,
        role: userLoggedResponse.role,
      });
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getProjectsData(): Promise<Project[] | undefined> {
    const projects = await getProjects();
    return projects;
  }
  async function getUsersData(
    page: number,
    limit: number,
    search?: string | null
  ): Promise<IUser[] | undefined> {
    const users = await getusers({ page, limit, search });
    return users;
  }
  async function createProjectRequest(
    name: string,
    description: string,
    membersId: string[]
  ){
    const response = await createProject({name, description, membersId}).then(
      ({ response }) => response.data
    );
    if (response.status === 400) {
      throw new Error(response.message);
    }
  }

  return (
    <UserContext.Provider
      value={{ ...userLogged, getProjectsData, getUsersData, createProjectRequest }}
    >
      {children}
    </UserContext.Provider>
  );
};
