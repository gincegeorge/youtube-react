import React from "react";
import { useSelector } from "react-redux";

const Sibebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (isMenuOpen) return null;
  return (
    <div className="mr-14 ">
      <h1 className="font-bold">Subscriptions</h1>
      <ul>
        <li>sports</li>
        <li>live</li>
        <li>news</li>
        <li>dev</li>
      </ul>
    </div>
  );
};

export default Sibebar;
