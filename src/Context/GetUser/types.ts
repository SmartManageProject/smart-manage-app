export interface IUserLogged {
  id: string;
  name: string;
  email: string;
  role: string;
  projects: [
    {
      id: string;
      name: string;
      description: string;
    },
  ];
}

export interface IUserLoggedContext extends IUserLogged {}

export interface IUserLoggedProvider{
  children: JSX.Element;
}
