/* eslint-disable react/prop-types */
import { useState, useCallback } from "react";
import { search } from "../assets/Images";
import { debounce } from "../utils/deboucing";

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const debouncedSearch = useCallback(
    debounce((text) => {
      onSearch(text);
    }, 1000),
    [onSearch]
  );

  const handleChange = (e) => {
    setSearchText(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <form className=" flex items-center bg-[#F0F0F6] rounded h-[40px] focus-within:ring-2 focus-within:ring-[#5E56E7]">
      <img
        src={search}
        alt="Search Icon"
        className="mx-2 w-4 h-5 text-gray-400"
      />
      <input
        type="search"
        className="bg-[#F0F0F6] placeholder:text-sm w-full outline-none text-sm font-semibold px-2"
        value={searchText}
        onChange={handleChange}
        placeholder="Search"
      />
    </form>
  );
};

export default SearchBar;
