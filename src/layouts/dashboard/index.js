import React from "react";
import { Stack, } from "@mui/material";
import { Outlet } from "react-router-dom";
import Sidebar from "./SideBar";

const DashboardLayout = () => {
  return (
    <Stack direction="row">
      {/* Sidebar */}
      <Sidebar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;