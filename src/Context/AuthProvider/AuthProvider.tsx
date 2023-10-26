import { createContext, useState } from "react";
import { IAuthProvider, IContext, IUser} from "./types";
import { LoginResquest } from "./Util";



export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({children}: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>()

  async function authenticate(email: string, password:string) {
    const reponse = await LoginResquest(email, password)

    const payload = {token: reponse.token, email};
    setUser(payload)
  } 

  function logout () {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{...user, authenticate, logout}}>
      {children}
    </AuthContext.Provider>
  )
}
