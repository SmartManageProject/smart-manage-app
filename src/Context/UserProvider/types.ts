import { ListUsersResponse } from "../../types/AppTypes";

export interface IUserLogged {
  id: string;
  name: string;
  role: string;

  email: string;

}

export interface IUserLoggedContext extends IUserLogged {
  updateUserLogged: () => Promise<void>;
  getProjectsData: () => Promise<Project[] | undefined>;
  getUsersData: (
    page: number,
    limit: number,
    search?: string | null,
  ) => Promise<ListUsersResponse | undefined>;
  createProjectRequest: (
    name: string,
    description: string,
    membersId: string[],
  ) => Promise<void>;
  getUserMessageData: (userId: string) => Promise<IUserLogged>;

}

export interface IUserLoggedProvider {
  children: JSX.Element;
}

export interface Project {
  id: string;
  name: string;
  description: string;
}

export interface IUser {
  active: boolean;
  id: string;
  name: string;
  email: string;
  role: string;
}
