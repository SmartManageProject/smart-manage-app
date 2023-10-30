import { redirect } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/useAuth";
import { ReactNode } from "react";

type ProtectedLayoutProps = {
  children: JSX.Element | ReactNode;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const auth = useAuth();

  if (!auth.token) {
    return redirect("/login");
  }

  return children;
};

export default ProtectedLayout;
