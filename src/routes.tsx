import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreateProject from "./pages/CreateProject/CreateProject";
import { AuthProvider } from "./Context/AuthProvider/AuthProvider";
import Login from "./pages/Login/Login";
import { useAuth } from "./Context/AuthProvider/useAuth";
import { getUserLocalStorage } from "./Context/AuthProvider/Util";
import { UserPorvider } from "./Context/GetUser/UserProvider";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token && !getUserLocalStorage()) {
    return <Navigate to="/login" />;
  }
  return element;
};

const AppRoutes = () => {
  return (
    <AuthProvider>
      <UserPorvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />

            <Route path="/">
              <Route
                index
                element={
                  <ProtectedRoute element={<HomePage />}></ProtectedRoute>
                }
              />
              <Route
                path="/CreateProject"
                element={
                  <ProtectedRoute element={<CreateProject />}></ProtectedRoute>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserPorvider>
    </AuthProvider>
  );
};

export default AppRoutes;
