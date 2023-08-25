// SearchBar.js
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { AiOutlineClose } from "react-icons/ai";

function SearchBar({ closeSearchBar, onSearchSubmit}) {

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term) {
      onSearchSubmit(term);
    }
  };

  return (
    <div className="">
      <div className="w-full h-20 bg-blue text-gray-300">
        <div className="w-full h-full mx-auto p-4 inline-flex items-center justify-center cursor-pointer">
          <div className="relative w-full max-w-md">
            <input
              className="w-full h-12 px-4 py-4 pr-10 text-sm bg-blue border-2 border-gray-500 focus:outline-none focus:ring focus:border-white"
              type="text"
              name="search"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="absolute top-0 right-0 h-full px-3">
              <GoSearch  className="text-gray-500" />
            </button>
          </div>
          <AiOutlineClose
            className="text-5xl p-2 mr-2 translate-transform transform hover:scale-105"
            onClick={closeSearchBar}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
