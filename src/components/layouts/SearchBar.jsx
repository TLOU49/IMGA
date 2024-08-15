import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoFilter, IoSearch, IoCaretForwardOutline   } from "react-icons/io5";
import { api } from '../../Context/useAuth';

const SearchBar = ({searchQuery,setSearchQuery}) => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState();
  const [isDateHovered, setIsDateHovered] = useState(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
 
  const fetchCategory = async ()=> {
    try {
        const category = await axios.get(`${api}/category`, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        setCategories(category.data);
    } catch (error) {
        console.error(error);
    }
};

useEffect(() => {
  fetchCategory();
}, [])

const handleCategoryChange = (e) => {
    setCategoryId(e.target.value)
};

  return (
    <div className='ml-[28rem] flex flex-row mt-[3rem] h-fit'>
        <span className="flex flex-row  bg-gray-100 rounded-md text-gray-500 font-medium pl-1 text-[15px] h-[2.5rem] w-[28.5rem]">
            <IoSearch className='mt-3 mx-2'/>
            <input type="text" className='w-[26rem] bg-gray-100 border-0 outline-0' placeholder='Search for...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
        </span>
      <span className="flex bg-activeBg mx-3 h-[2.5rem] w-[5.8rem] px-3 py-2 rounded font-semibold text-text_blue cursor-pointer" onClick={() => setFilter(!filter)}>
        <IoFilter className='mt-1 mr-1'/>
        <p className="">Filters</p>
      </span>
      { filter &&(<div className="bg-white w-fit h-[4.5rem] p-3 rounded absolute ml-[29rem] mt-[2.8rem] z-10 text-gray-500 font-semibold shadow-md shadow-gray-500">
                                  <span className="flex flex-row cursor-pointer" onMouseEnter={()=> setIsDateHovered(true)} onMouseLeave={()=> setIsDateHovered(false)}>
                                  <p className="">Date </p>
                                  <IoCaretForwardOutline className='mt-1 ml-auto'/>
                                  </span>
                                  <span className="flex flex-row cursor-pointer border-t-2 mt-1" onMouseEnter={()=> setIsCategoryHovered(true)} onMouseLeave={()=> setIsCategoryHovered(false)}>
                                  <p className="">Categories </p>
                                  <IoCaretForwardOutline className='mt-1 ml-auto'/>
                                  </span>
                                  </div>
                                )}

      {
        isDateHovered && (
      <div className="bg-white w-fit h-[4rem] p-3 rounded absolute ml-[36.8rem] mt-[2.8rem] z-10 text-gray-500 font-semibold shadow-md shadow-gray-500">
        <p className="">Date Uploaded: Newest first</p> 
        <p className="">Date Uploaded: Oldest first</p>
      </div>
        )
      }
      
      { 
        isCategoryHovered && (
      <div className="bg-white w-fit h-fit p-3 rounded absolute ml-[36.8rem] mt-[5rem] z-10 text-gray-500 font-medium shadow-md shadow-gray-500 " onMouseEnter={()=> setIsCategoryHovered(true)} onMouseLeave={()=> setIsCategoryHovered(false)}>
        {
                            categories.map(
                                category => (
                                    <p key={category.id} value={category.id} >
                                        {category.categoryName}
                                    </p>
                                )
                            )
                        }   
      </div>
        )
      }
    </div>
  )
}

export default SearchBar
