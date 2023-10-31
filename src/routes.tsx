import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreateProject from "./pages/CreateProject/CreateProject";
import { AuthProvider } from "./Context/AuthProvider/AuthProvider";
import Login from "./pages/Login/Login";
import { useAuth } from "./Context/AuthProvider/useAuth";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.token) {
    return <Navigate to="/login" />;
  }

  return element;
};

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/">
            <Route
              index
              element={<ProtectedRoute element={<HomePage />}></ProtectedRoute>}
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
    </AuthProvider>
  );
};

export default AppRoutes;
