
export interface IUser {
  email?: string;
  toke?: string;
}


export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
}

export interface IAuthProvider {
  children: JSX.Element
}





