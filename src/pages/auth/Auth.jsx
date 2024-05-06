import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  let user = true; // localStorage.getItem("token");
  return user ? <Outlet /> : <Navigate replace to={"/login"} />;
};

export default memo(Auth);
