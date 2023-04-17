import React from "react";
import Sidebar from "./Sibebar";
import Main from "./main/Main";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="mx-auto flex p-6">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
