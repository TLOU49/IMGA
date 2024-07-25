import React, { useState } from 'react'
import './RegisterProfile.css'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const RegisterProfile = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const data = {
      username,
      email,
      password,
      confirmPassword,
      phoneNumber
    };

    axios.post('http://localhost:5204/backend/account/register', data,{
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log('Response:', response.data);
      navigate('/');
    })
    .catch(error => {
      console.error('Error:', error);

      if(error.response){
        setError(error.response.data);
      }else {
        setError('An error occurred. Please try again');
      }
    })
  };

  return (
    <div className='opening-div w-screen h-screen font-bodyFont'>
      <div className="bg-white text-text_blue  sm:w-1/2 lg:w-1/4 h-full flex flex-col pl-[4rem] pt-[8rem]">
      <h2 className="text-[2.1rem] font-bold">Register Profile</h2>
      <p className="text-[12px] font-normal mt-1 text-black">Sign up now to create your profile and connect with others.</p>

      <form onSubmit={handleRegister} className="mt-[3rem]">
      <span >
        <p className="text-[12px] font-semibold" >Full Name</p>
        <input type="text" placeholder='Enter Name' className='border-[1px] border-text_blue rounded text-[13px] h-[2.2rem] w-4/5 px-2 outline-0' id='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
      </span>

      <span className="">
        <p className="text-[14px] font-semibold mt-4">Email Address</p>
        <input type="text" placeholder='Enter Email' className='border-[1px] border-text_blue rounded text-[13px] h-[2.2rem] w-4/5 px-2 outline-0' value={email} onChange={e => setEmail(e.target.value)}/>
      </span>

      <span className="">
        <p className="text-[14px] font-semibold mt-4">Password</p>
        <input type="password" placeholder='Enter Password' className='border-[1px] border-text_blue rounded text-[13px] h-[2.2rem] w-4/5 px-2 outline-0' value={password} onChange={e => setPassword(e.target.value)}/>
      </span>

      <span className="">
        <p className="text-[14px] font-semibold mt-4">Confirm Password</p>
        <input type="password" placeholder='Enter Password' className='border-[1px] border-text_blue rounded text-[13px] h-[2.2rem] w-4/5 px-2 outline-0' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
      </span>

      <button type='submit' className="bg-iga_blue w-4/5 h-[2.8rem] text-blue-100 font-medium text-[16px] mt-10 rounded" >Register</button>
      </form>
      {error && (
          <div className="text-red-500 mt-2">
            {typeof error === 'string' ? error.response : JSON.stringify(error.errors.Email, null, 2)}
          </div>
        )}

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
