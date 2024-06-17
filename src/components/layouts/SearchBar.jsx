import React from 'react'
import { IoFilter, IoSearch  } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className='ml-[28rem] flex flex-row mt-[4rem] h-24'>
        <span className="flex flex-row  bg-gray-100 rounded text-gray-500 font-semibold pl-1 text-[15px] h-[2.5rem]">
            <IoSearch className='mt-3 mx-2'/>
            <input type="text" className='w-[26rem] bg-gray-100 border-0 outline-0' placeholder='Search for...'/>
        </span>
      <span className="flex bg-green-50 mx-3 h-[2.5rem] px-3 py-2 rounded font-semibold text-text_blue">
        <IoFilter className='mt-1 mr-1'/>
        <p className="">Filters</p>
      </span>
    </div>
  )
}

export default SearchBar
