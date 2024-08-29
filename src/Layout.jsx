import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

const Layout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-52 hidden sm:block">
        <Sidebar />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
