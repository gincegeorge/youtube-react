import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import axios from "axios";
import { cachedResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  useEffect(() => {
    //DEBOUNCING
    //make an api call after every key press
    //but if the difference is less than 200 ms decline the api call

    //cache search results

    const timer = setTimeout(() => {
      if (searchQuery.length === 0) {
        return;
      }
      if (searchCache[searchQuery]) {
        setSearchResults(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    axios.get(YOUTUBE_SEARCH_API + searchQuery).then((responce) => {
      setSearchResults(responce.data[1]);

      console.log(searchQuery, responce.data[1]);

      // update cache
      dispatch(
        cachedResults({
          [searchQuery]: responce.data[1],
        })
      );
    });
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <header className="drop-shadow-md">
      <nav
        className="mx-auto flex  items-center justify-between px-6 pt-2 lg:px-8 "
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <img
            onClick={() => toggleMenuHandler()}
            className="h-7 cursor-pointer mr-5"
            src="https://cdn-icons-png.flaticon.com/512/3917/3917215.png"
            alt="menu"
          />
          <img
            className="h-16"
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
            alt="logo"
          />
        </div>
        <div className="overflow-x-hidden relative">
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="border py-2 px-4 w-[600px] rounded-l-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            <button className="border px-4 py-[9px] rounded-r-full">
              <img
                className="w-5"
                src="https://www.freeiconspng.com/uploads/search-icon-png-5.png"
              />
            </button>
          </div>
          {(searchResults.length > 0) & showSuggestions ? (
            <div className="search-results fixed bg-white p-2 rounded-lg  w-2/5">
              <ul>
                {searchResults.map((element) => (
                  <li className="py-[5px] px-2 hover:bg-gray-100" key={element}>
                    {" "}
                    <img
                      className="w-[18px] inline mr-2"
                      src="https://www.freeiconspng.com/uploads/search-icon-png-5.png"
                    />
                    {element}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="flex items-center text-sm font-semibold leading-6 text-gray-900 border border-black p-3 rounded-full w-35 h-10"
          >
            <img
              className=" mr-2 w-7 h-7"
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
              alt="user-icon"
            />
            Sign in
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Head;
