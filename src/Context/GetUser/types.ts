export interface IUserLogged {
  name?: string;
  role?: string;
}

export interface IUserLoggedContext extends IUserLogged {
  getName: () => string | undefined;
  getRole: () => string | undefined;
}

export interface IUserLoggedProvider{
  children: JSX.Element;
}
