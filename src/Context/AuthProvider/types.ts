
export interface IUser {
  id?: string;
  token?: string;
}

export interface IContext extends IUser {
  authenticate: (email:string | undefined, password: string | undefined) => Promise<void>
  logout: () => void
  createUser:(name:string | undefined, email:string | undefined, password:string | undefined, role:string | undefined) => Promise<void>
}

export interface IAuthProvider {
  children: JSX.Element
}





