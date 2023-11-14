export interface IUserLogged {
  name?: string;
  role?: string;
}

export interface IUserLoggedContext extends IUserLogged {
  getName: () => Promise<string | undefined>;
  getRole: () => Promise<string | undefined>;
  getProjectsData: () => Promise<Project[] | undefined>;
  getUsersData: (
    page: number,
    limit: number,
    search?: string | null
  ) => Promise<IUser[] | undefined>;
  createProjectRequest: (
    name: string,
    description: string,
    membersId: []
  ) => Promise<void>;
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
  id: string;
  name: string;
  email: string;
  role: string;
}
