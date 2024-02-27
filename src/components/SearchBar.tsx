'use client'
import React, { useState } from 'react'

import BackIcon from './icons/BackIcon'
import FilterIcon from './icons/FilterIcon'
import SearchIcon from './icons/SearchIcon'

const SearchBar = () => {
  const [isSearchFocus, setIsSearchFocus] = useState(false)
  return (
    <div className='flex h-[49px] items-center justify-between border-b-[1px] border-[#d4d4d4] bg-[#fff] p-4 py-2'>
      <div className='flex h-full w-[calc(100%-36px)] items-center space-x-4 rounded bg-[#F0F2F5] p-2'>
        {isSearchFocus ? <BackIcon /> : <SearchIcon />}
        <input
          className='w-full bg-[#F0F2F5] text-[12px] focus:border-transparent focus:outline-none'
          placeholder='Search or start new chat'
          onFocus={() => setIsSearchFocus(true)}
          onBlur={() => setIsSearchFocus(false)}
        />
      </div>
      <button>
        <FilterIcon />
      </button>
    </div>
  )
}
export default React.memo(SearchBar)
