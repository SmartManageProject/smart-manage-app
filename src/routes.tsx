import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreateProject from "./pages/CreateProject/CreateProject";
import { AuthProvider } from "./Context/AuthProvider/AuthProvider";
import ProtectedLayout from "./components/ProtectedLayout/ProtectedLayout";
import Login from "./pages/Login/Login";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <ProtectedLayout>
            <Route path="/">
              <Route index path="/home" element={<HomePage />} />
              <Route path="/CreateProject" element={<CreateProject />} />
            </Route>
          </ProtectedLayout>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
