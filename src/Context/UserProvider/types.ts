export interface IUserLogged {
  name?: string;
  role?: string;
}

export interface IUserLoggedContext extends IUserLogged {
  getName: () => Promise<string | undefined>;
  getRole: () => Promise<string | undefined>;
  getProjectsData: () => Promise<Project[] | undefined>;
  getUsers: () => Promise<User[] | undefined>;
}

export interface IUserLoggedProvider {
  children: JSX.Element;
}

export interface Project {
  id: string;
  name: string;
  description: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}
