import React, { useEffect, useState } from 'react'
import './LogIn.css';
import { FaUser   } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LogIn = () => {   
        const [username, setUsername] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState(null);
        const [lockoutMessage, setLockoutMessage] = useState('');
        const [remainingLockoutTime, setRemainingLockoutTime] = useState(0);
        const [isLockedOut, setIsLockedOut] = useState(false);
      
        const navigate = useNavigate();

        const handleLogin = (e) => {

          const data = {
            username,
            email,
            password
          };
      
          axios.post('http://localhost:5204/backend/account/login', data,{
            headers: {
              'Content-Type': 'application/json'
            }
          })
          .then(response => {
            console.log('Response:', response.data);
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('userName', response.data.userName, response.data.email);
            localStorage.setItem('email', response.data.email);
            localStorage.setItem('userId', response.data.userId);
            navigate('/home');
          })
          .catch(error => {
            console.error('Error:', error);
      
            if(error.response){
              setError(error.response.data);
              if(error.response.data.remainingLockoutTime)
                {
                  setIsLockedOut(true);
                  setLockoutMessage(error.response.data.message);
                  setRemainingLockoutTime(error.response.data.remainingLockoutTime);
                }
                console.log(error.response.data.remainingLockoutTime);
            }else {
              setError('An error occurred. Please try again');
            }
          })
        };

        useEffect(() => {
          let timer;
          if(isLockedOut && remainingLockoutTime > 0){
            timer = setInterval(() => {
              setRemainingLockoutTime(prev => {
                if (prev <= 1){
                  clearInterval(timer);
                  setIsLockedOut(false);
                  return 0;
                }
                return prev - 1;
              });
            }, 1000);
          }
          return () => clearInterval(timer);
        }, [isLockedOut, remainingLockoutTime]);
        
  return (
    <div className='LogIn w-screen h-screen flex justify-center opacity-95 font-bodyFont'>
       <div className="flex flex-col text-text_blue bg-white w-1/2 xl:w-2/5 sm:h-4/6 md:h-3/5 mt-36 rounded-md place-items-center opacity-100">
       {!isLockedOut ? (
        <span className="flex flex-col w-full align-center justify-center place-items-center w-full">
        <h3 className="text-[2.2rem] flex flex-col font-bold  text-center pt-[3rem]">
            <p>Image Gallery App</p>
            <p>Login</p>
        </h3>

          {/* INPUTS */}
        <div className='w-3/5 mt-[2rem] flex flex-col '>
        {/* INPUT USERNAME */}
    <span className="w-full">
        <p className="text-[11px] font-extrabold py-1">Username</p>

        <span className='flex flex-row w-full h-[38px] text-[11px] text-center text-gray-500  border py-2 rounded border-gray-400 pl-3'>
        <FaUser   className='mt-[5px]' />
        <input type="text" placeholder='Enter Username' className='w-11/12 pl-2 outline-0 text-[10px]' value={username} onChange={e => setUsername(e.target.value)}/>
        </span>
    </span>

    {/* INPUT PASSWORD */}
    <span className="mt-[1.5rem] w-full">
        <p className="text-[11px] py-1 font-extrabold">Password</p>

    <span className='flex text-center h-[38px] align-center text-gray-500  border py-2 px-2 rounded border-gray-400'>
        <MdLock className='mt-[1px]' />
        <input type="password" placeholder='Enter Password' className='text-[10px] w-11/12 pl-2 outline-0' value={password} onChange={e => setPassword(e.target.value)}/>
    </span>
    </span>

    {/* FORGOT PASSWORD */}
    <span className="ml-auto">
    <Link to='/forgot-password'>
    <p className="text-[10px] font-semibold pt-2 ">Forgot Password?</p>
    </Link>
    </span>
     
    </div>

    {/* BUTTON */}
    <button type='submit' className="bg-iga_blue w-3/5 rounded text-white align-center justify-center mt-[3rem] h-[2.7rem]" onClick={handleLogin}>
    <p className='text-[16px] font-normal'>Login</p>
    </button>
    {error && (
<div className="text-red-500 mt-2">
  {typeof error === 'string' ? error : <pre>{JSON.stringify(error, null, 2)}</pre>}
</div> 
)}
    <span className="text-[10px] mt-[2rem] mb-[3rem] font-semibold flex flex-row ">New to this platform? 
        <Link to='/register'>
        <p className="px-1 font-black">Register</p> 
        </Link>
        Here</span>
      
        </span>
       ) : (
        <div className="text-text_blue flex flex-col text-center mt-[5rem]">
          <h3 className="text-[2.2rem] flex flex-col font-bold  text-center ">
            <p>Image Gallery App</p>
            <p>Login</p>
        </h3>
        <h2 className='text-3xl font-bold'>Account Locked</h2>
        <p className='mt-6 text-[14px]'>{lockoutMessage}</p>
        <p className='mt-3 text-[14px]'>Try again in <span>{remainingLockoutTime}</span> seconds.</p>
    </div>
       )}    
        </div>
    </div>
  )
}

export default LogIn