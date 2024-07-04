import React, { useState } from 'react'
import { RxCaretRight, RxCaretDown } from "react-icons/rx";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/home';
  const isAuthenticated = !!localStorage.getItem('token');

  const notify = () => toast("Wow so easy!");

  return (
    <div className='h-20 ml-[24rem] w-3/4 text-text_blue shadow-md shadow-gray-500 flex justify-between'>
        <span className="flex m-6 font-semibold">
            <p className="text-[1.1rem]">{isHome ? 'Home' : 'Image Upload'}</p>
            <RxCaretRight className='pb-1 text-[2rem]'/>
        </span>
        <span className="flex mt-6 ">
        <IoPersonCircleOutline className='text-[1.6rem] ' onClick={notify}/>

        <p className="text-[16px] px-2 font-semibold">{isAuthenticated ? localStorage.getItem('userName') :'Guest'  }</p>
        <RxCaretDown className='text-[1.4rem] font-bold'/>
        </span>
    </div>
  )
}
