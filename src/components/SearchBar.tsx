"use client"
import React, { useState } from "react"
import SearchIcon from "./icons/SearchIcon"
import BackIcon from "./icons/BackIcon"
import FilterIcon from "./icons/FilterIcon"

const SearchBar = () => {
  const [isSearchFocus, setIsSearchFocus] = useState(false)
  return <div className="bg-[#fff] p-4 py-2 flex h-[49px] items-center justify-between border-b-[1px] border-[#d4d4d4]">
    <div className="w-[calc(100%-36px)] bg-[#F0F2F5] h-full rounded flex items-center p-2 space-x-4">
      {isSearchFocus ?  <BackIcon /> : <SearchIcon />}
      <input 
        className="bg-[#F0F2F5] focus:border-transparent focus:outline-none w-full text-[12px]" 
        placeholder="Search or start new chat" 
        onFocus={() => setIsSearchFocus(true)} 
        onBlur={() => setIsSearchFocus(false)} 
      />
    </div>
    <button>
      <FilterIcon />
    </button>
  </div>
}
export default React.memo(SearchBar)