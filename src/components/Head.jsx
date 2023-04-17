import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
            alt="menu"
          />
          <a href="#" className="ml-2 p-1.5">
            <img
              className="h-16"
              src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
              alt="logo"
            />
          </a>
        </div>
        <div className="hidden lg:flex">
          <input
            type="text"
            placeholder="Search"
            className="border py-2 px-4 w-[600px] rounded-l-full"
          />
          <button className="border px-4 py-1 rounded-r-full">Search</button>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            <img
              className="h-10"
              src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
              alt="user-icon"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Head;
