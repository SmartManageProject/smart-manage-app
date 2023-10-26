import { useContext } from "react"
import { AuthContext } from "./AuthProvider";

//facilitador do uso do contexto
export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
}