import { useContext } from "react";
import { UserContext } from "./UserProvider"

export const useUserLogged = () => {
  const context = useContext(UserContext);
  return context
}

