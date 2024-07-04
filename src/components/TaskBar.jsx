import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { TbCameraPlus } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../Context/useAuth';
import Logo from '../assets/Logo.png'

export const TaskBar = () => {
  const location = useLocation();
  // const isHome = ()=> location.pathname === '/home';
  // const isImageUpload = ()=> location.pathname === '/upload';


  // const handleBg = ()=>{
  //   if(isHome()) return 'bg-activeBg text-text_blue';
  //   if(isImageUpload()) return 'bg-activeBg text-text_blue';
  //   return '';
  // };
  const handleBg = (path) => {
    return location.pathname === path ? 'bg-activeBg text-text_blue' : '';
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    logout(navigate)
  };
  return (
    <>
        <div className="bg-iga_blue absolute text-white h-full w-[24rem] font-bodyFont pt-1 pl-3">
            {/* <h1 className="text-[2.5rem] font-semibold ">Logo</h1> */}
            <img src={Logo} alt="logo" width={150} className='ml-[4rem] mt-8' />

            <div className="text-[1.2rem] font-semibold mt-20 ">
              <Link to='/home'>
            <span className={`flex flex-row  mr-3 h-[5rem] pt-7 rounded-md pl-3 ${handleBg('/home') }`}><GoHome className='mr-3 mt-1 font-bold'/><p className="">Home</p></span>
              </Link>
            <Link to='/upload'>
            <span className={`flex flex-row mr-3 h-[5rem] pt-7  rounded-md mt-2 pl-3 ${handleBg('/upload')}`}  ><TbCameraPlus className='mr-3 mt-1'/><p className="">Image Upload</p></span>
            </Link>
            <span className="flex flex-row pl-3 absolute bottom-3 cursor-pointer" onClick={handleLogout}><MdLogout className='mr-3 mt-1'/><p className="">Logout</p></span>
            </div>
        </div>
    </>
  )
}
