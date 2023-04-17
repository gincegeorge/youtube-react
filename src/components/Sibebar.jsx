import React from "react";
import { useSelector } from "react-redux";

const Sibebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (isMenuOpen) return null;
  return (
    <div className="mr-14 ">
      <ul className="mb-6">
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold">Subscriptions</h1>
      <ul className="mb-6">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold">Watch later</h1>
      <ul className="mb-6">
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sibebar;
