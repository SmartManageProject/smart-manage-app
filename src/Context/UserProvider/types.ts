export interface IUserLogged {
  name?: string;
  role?: string;
}

export interface IUserLoggedContext extends IUserLogged {
  getName: () => string | undefined;
  getRole: () => string | undefined;
  getProjectsData: () => Promise<Project[]| undefined >
}

export interface IUserLoggedProvider {
  children: JSX.Element;
}

export interface Project { 
  id: string; name: string; description: string 
}
