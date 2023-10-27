import { useAuth } from "../../Context/AuthProvider/useAuth";
import Login from "../../pages/Login/Login";
import { Route } from "react-router-dom";

type ProtectedLayoutProps = {
  children: JSX.Element;
};

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  const auth = useAuth();

  if (!auth.token) {
    return <Route path="/login" element={<Login />} />;
  }

  return children;
};

export default ProtectedLayout;
