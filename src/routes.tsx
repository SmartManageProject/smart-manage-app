import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreateProject from "./pages/CreateProject/CreateProject";
import { AuthProvider } from "./Context/AuthProvider/AuthProvider";
import ProtectedLayout from "./components/ProtectedLayout/ProtectedLayout";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <ProtectedLayout>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="/CreateProject" element={<CreateProject />} />
            </Route>
          </ProtectedLayout>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
