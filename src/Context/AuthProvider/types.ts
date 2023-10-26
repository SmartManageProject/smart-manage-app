//cria a base do usuario com o email e token de autenticação
export interface IUser {
  email?: string;
  toke?: string;
}

// cria a base do contexto com a interface de usuario mais a função de autenticação e logout
export interface IContext extends IUser {
  authenticate: (email: string, password: string) => Promise<void>
  logout: () => void
}

// cria a base do provedor do contexto
export interface IAuthProvider {
  children: JSX.Element
}





