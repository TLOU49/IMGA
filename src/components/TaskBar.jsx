import React, { useState } from 'react'
import { GoHome } from "react-icons/go";
import { TbCameraPlus } from "react-icons/tb";
import { MdLogout } from "react-icons/md";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../Context/useAuth';
import Logo from '../assets/Logo.png'
import { MdOutlineImage } from "react-icons/md";
import { FaRegSquare } from "react-icons/fa6";

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
        <div className="bg-iga_blue absolute text-white h-screen w-1/5 font-bodyFont pt-1 pl-3">
            <img src={Logo} alt="logo" className='ml-0 md:ml-6 lgl:ml-10 mt-8 w-[5rem] mdl:w-[7rem] lg:w-[9rem]' />

            <div className="text-[1.3rem] font-semibold mt-10 ">
              <Link to='/home'>
            <span className={`flex flex-col md:flex-row  mr-1 md:mr-3 h-[5rem] mt-2 pt-5 rounded-md pl-3 ${handleBg('/home') }`}><GoHome className='mr-3 ml-3 md:ml-0 mt-1 font-bold'/><p className="text-[13px] ml-3 md:ml-0 md:text-[1.3rem]">Home</p></span>
              </Link>

            <Link to='/upload'>
            <span className={`flex flex-col md:flex-row mr-1 md:mr-3 h-[5rem] mt-2 pt-5 rounded-md mt-2 pl-3 ${handleBg('/upload')}`}><TbCameraPlus className='mr-3 ml-3 md:ml-0 mt-1'/><p className="text-[11px] md:text-[1.3rem]">Image Upload</p></span>
            </Link>

            <Link to='/library'>
            <div className={`flex flex-col md:flex-row mr-1 md:mr-3 h-[5rem] mt-2 pt-5 rounded-md pl-3 ${handleBg('/library') }`}>
            <span className="flex mr-3">
            <MdOutlineImage className=' mt-1 font-bold ml-1 md:ml-0'/>
            </span>

            <p className="text-[11px] md:text-[1.3rem]">My Library</p>
            </div>
              </Link>
              
            <span className="flex flex-col md:flex-row pl-3 absolute bottom-3 cursor-pointer" onClick={handleLogout}><MdLogout className='mr-3 mt-1 ml-2 md:ml-0'/><p className="text-[11px] md:text-[1.3rem]">Logout</p></span>
            </div>
        </div>
    </>
  )
}
