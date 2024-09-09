import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/Logo-white.png'

const LogOut = () => {
  return (
        <div className="bg-gray-300 ml-[24rem] h-screen flex items-center">

        <div className="bg-white h-[17rem] shadow-sm shadow-black pt-2 text-center items-center flex flex-col  w-1/2 ml-[15rem]">
      {/* <h2 className="text-[2.5rem] font-bold text-iga_blue">Logo</h2> */}
      <img src={Logo} width={150} alt="" />
      <p className="border-t-[1px] border-iga_blue text-[13px] text-text_blue font-semibold mt-[1rem] py-3 w-5/6 ">You have successfully logged out</p>

      <span className="w-5/6">
      <Link to='/login'>
      <button className="bg-iga_blue w-full text-blue-100  rounded h-[2.5rem] text-[14px] ">Back to Login</button>
      </Link>
      </span>
        </div>
    </div>
  )
}

export default LogOut
