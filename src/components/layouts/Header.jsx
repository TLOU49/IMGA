import React, { useState } from 'react'
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

  const  [isActive, setIsActive ] = useState(false);

 

 const handleToggle = ()=> {
  setIsActive(!isActive)
 }

 const handleReset = ()=> {
  localStorage.removeItem('token');
 };

  return (
    <div className='h-20 ml-auto w-4/5 text-text_blue shadow-md shadow-gray-500 flex justify-between pr-6'>
        <span className="flex m-6 font-semibold">
        <ToastContainer/>
            <p className="text-[1.1rem]">{isHome ? 'Home' : isLibrary? 'Image Upload': 'My Library'}</p>
            <RxCaretRight className='pb-1 text-[2rem]'/>
        </span>
        <span className="flex mt-6 ">
        <IoPersonCircleOutline className='text-[1.6rem] '/>

        <p className="text-[16px] px-4 mr-3 font-semibold">{isAuthenticated ? localStorage.getItem('userName') :'Guest'  }</p>
        <RxCaretDown className='text-[1.4rem] font-bold cursor-pointer' onClick={handleToggle}/>
        </span>
        {
          isActive &&(

            <div className="absolute top-[4rem] right-[3.5rem] bg-white text-[12px] p-4 shadow-md shadow-gray-400 ">
          <p className="">{isAuthenticated? localStorage.getItem('email') : 'Guest'}</p>
         
          <Link to='/forgot-password'>
          <p className="mt-2" onClick={handleReset}>Reset Password</p>
          </Link>
        </div> 
          )
        }
    </div>
  )
};