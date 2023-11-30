import { createContext, useState } from "react";
import {
  IUserLogged,
  IUserLoggedContext,
  IUserLoggedProvider,
  Project,
} from "./types";
import { createProject, getProjects, getUserData, getusers } from "./Util";
import { getUserLocalStorage } from "../AuthProvider/Util";
import { ListUsersResponse } from "../../types/AppTypes";

export const UserContext = createContext<IUserLoggedContext>(
  {} as IUserLoggedContext,
);
export const UserPorvider = ({ children }: IUserLoggedProvider) => {
  const [userLogged, setUserLogged] = useState<IUserLogged>();

  async function updateUserLogged(): Promise<void> {
    const { id } = getUserLocalStorage();

    const userLoggedResponse = await getUserData({ userId: id });
    setUserLogged({
      id: userLoggedResponse.id,
      name: userLoggedResponse.name,
      role: userLoggedResponse.role,
      email: userLoggedResponse.email,
    });
  }

  async function getProjectsData(): Promise<Project[] | undefined> {
    const projects = await getProjects();
    return projects;
  }
  async function getUsersData(
    page: number,
    limit: number,
    search?: string | null,
  ): Promise<ListUsersResponse | undefined> {
    return await getusers({ page, limit, search });
  }
  async function createProjectRequest(
    name: string,
    description: string,
    membersId: string[],
  ) {
    const response = await createProject({ name, description, membersId }).then(
      (response) => response,
    );

    if (response.status === 400) {
      throw new Error(response.message);
    }
  }
  async function getUserMessageData(userId: string): Promise<IUserLogged> {
    const response = await getUserData({ userId });
    return {
      id: response.id,
      name: response.name,
      role: response.role,
      email: response.email,
    };
  }

  return (
    <UserContext.Provider
      value={{
        ...userLogged,
        updateUserLogged,
        getProjectsData,
        getUsersData,
        createProjectRequest,
        getUserMessageData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
