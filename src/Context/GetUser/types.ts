export interface IUserLogged {
  id?: string;
  name?: string;
  email?: string;
  role?: string;
  projects?: [
    {
      id?: string;
      name?: string;
      description?: string;
    },
  ];
}

export interface IUserLoggedContext extends IUserLogged {
  getName?: () => string | undefined;
  getRole?: () => string | undefined;
}

export interface IUserLoggedProvider{
  children: JSX.Element;
}
