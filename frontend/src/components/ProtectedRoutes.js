import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
  const access = JSON.parse(localStorage.getItem("tokens"));

  return access?.access ? <Outlet /> : <Navigate to={"/signin"} />;
};

export default ProtectedRoutes;
