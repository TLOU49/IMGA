import React, { useEffect, useRef, useState } from 'react'
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home';
  const isLibrary = location.pathname === '/upload';
  const isAuthenticated = !!localStorage.getItem('token');
  const caretRef = useRef(null);

  const  [isActive, setIsActive ] = useState(false);

  const handleToggle = ()=> {
    setIsActive(!isActive)
  }

const handleClickOutside  = (event)=> {
    if(caretRef.current && !caretRef.current.contains(event.target)){
      setIsActive(false);
    }
};

useEffect(() => {
  document.addEventListener('mousedown', handleClickOutside )
  return () => {
    document.removeEventListener('mousedown', handleClickOutside )
  }
}, []);

  return (
    <div className='h-20 ml-auto w-4/5 text-text_blue shadow-md shadow-gray-500 flex justify-between pr-6 pt-[1rem] md:pt-0'>
      {/* Left Header */}
        <span className="flex m-6 font-semibold">
        <ToastContainer/>
            <p className="text-[0.8rem] md:text-[1.1rem]">{isHome ? 'Home' : isLibrary? 'Image Upload': 'My Library'}</p>
            <RxCaretRight className='pb-3 md:pb-1 text-[2rem]'/>
        </span>

        {/* Right Header */}
        <span className="flex mt-6 ">
        <IoPersonCircleOutline className='text-[1rem] md:text-[1.6rem] mr-[-0.8rem] md:mr-0'/>

        <p className="text-[11px] md:text-[16px] px-4 font-semibold mr-[-0.8rem] md:mr-0">{isAuthenticated ? localStorage.getItem('userName') :'Guest'  }</p>
        <div className="" onClick={handleToggle}>
        <RxCaretDown className='text-[1.4rem] font-bold cursor-pointer mt-[-0.3rem] md:mt-0 mr-[-1rem] md:mr-0' />
        </div>
        </span>

        {/* Dropdown div */}
        {
          isActive &&(

            <div className="absolute top-[4rem] right-[3.5rem] bg-white text-[12px] p-4 shadow-md shadow-gray-400 " ref={caretRef}>
          <p className="">{isAuthenticated? localStorage.getItem('email') : 'Guest'}</p>
         
          <Link to='/user-reset'>
          <p className="mt-2" >Reset Password</p>
          </Link>
        </div> 
          )
        }
    </div>
  )
};