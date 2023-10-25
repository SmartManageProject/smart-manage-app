import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CreateProject from "./pages/CreateProject/CreateProject";
import Login from "./pages/Login/Login";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/CreateProject" element={<CreateProject />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
