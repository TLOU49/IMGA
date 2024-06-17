import React from 'react'
import './RegisterProfile.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const RegisterProfile = () => {
  return (
    <div className='opening-div w-screen h-screen '>
      <div className="bg-white text-text_blue  sm:w-1/2 lg:w-1/4 h-full flex flex-col pl-[4rem] pt-[8rem]">
      <h2 className="text-[2.1rem] font-bold">Register Profile</h2>
      <p className="text-[12px] font-medium mt-1 text-black">Lorem ipsum, dolor sit amet consectetur sit amet consectetur.</p>

      <span className="mt-[3rem]">
        <p className="text-[14px] font-semibold ">Full Name</p>
        <input type="text" placeholder='Enter Name' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0' />
      </span>

      <span className="">
        <p className="text-[14px] font-semibold mt-4">Email Address</p>
        <input type="text" placeholder='Enter Email' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0'/>
      </span>

      <span className="">
        <p className="text-[14px] font-semibold mt-4">Password</p>
        <input type="text" placeholder='Enter Password' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0'/>
      </span>

      <span className="">
        <p className="text-[14px] font-semibold mt-4">Confirm Password</p>
        <input type="text" placeholder='Enter Password' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0'/>
      </span>
      <Link to='/login'>
      <button className="bg-iga_blue w-4/5 h-[2.5rem] text-blue-100 font-medium text-[15px] mt-10 rounded">Register</button>
      </Link>

      <p className="text-center mr-[3rem] w-3/4 mt-3 text-black text-[13px]">or</p>

      <span className="flex flex-row shadow-md text-center items-center py-2 justify-center shadow-gray-400 w-4/5 mt-1">
        <FcGoogle/>
      <button className="ml-3">Sign in with Google</button>
      </span>
      <span className="flex flex-row shadow-md shadow-gray-400 py-2 w-4/5 mt-3 text-center items-center justify-center">
        <FaFacebook className='text-blue-600 text-[1.1rem]'/>
      <button className="ml-2">Sign in with Facebook</button>
      </span>
      </div>
    </div>
  )
}

export default RegisterProfile
