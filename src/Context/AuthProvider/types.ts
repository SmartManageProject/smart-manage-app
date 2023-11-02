
export interface IUser {
  id?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
  createUser:(name:string, email:string, password:string, role:string) => Promise<void>
}

export interface IAuthProvider {
  children: JSX.Element
}





