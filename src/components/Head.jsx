import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import axios from "axios";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    //DEBOUNCING
    //make an api call after every key press
    //but if the difference is less than 200 ms decline the api call
    const timer = setTimeout(() => getSearchSuggessions(), 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggessions = async () => {
    console.log("API call - ", searchQuery);
    console.log(YOUTUBE_SEARCH_API + searchQuery);
    axios.get(YOUTUBE_SEARCH_API + searchQuery).then((responce) => {
      console.log(responce.data[1]);
      setSearchResults(responce.data[1]);
    });
  };

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  console.log(searchResults.length, "------------------");

  return (
    <header className="drop-shadow-md">
      <nav
        className="mx-auto flex  items-center justify-between px-6 pt-2 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-8 cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
            alt="menu"
          />
          <img
            className="h-16"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </div>
        <div className="overflow-x-hidden relative">
          <div>
            <input
              type="text"
              placeholder="Search"
              className="border py-2 px-4 w-[600px] rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="border px-4 py-2 rounded-r-full">Search</button>
          </div>
          {searchResults.length > 0 ? (
            <div className="search-results fixed bg-white py-3 px-5 rounded-lg  w-2/5">
              <ul>{searchResults.map((element)=><li className="pb-1">{element}</li>)}</ul>
            </div>
          ) : (
            ""
          )}
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
