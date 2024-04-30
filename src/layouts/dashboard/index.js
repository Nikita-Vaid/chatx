import React from "react";
import { Stack, } from "@mui/material";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const isAuthenticated = true;

const DashboardLayout = () => {

  if(!isAuthenticated){
    return <Navigate  to="/auth/login"/>;
  }

  return (
    <Stack direction="row">
      {/* Sidebar */}
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;