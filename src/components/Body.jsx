import React from "react";
import Sidebar from "./Sibebar";
import Main from "./main/Main";

const Body = () => {
  return (
    <div className="mx-auto flex p-6">
      <Sidebar />
      <Main />
    </div>
  );
};

export default Body;
