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
            localStorage.setItem('userName', response.data.userName);
            navigate('/home');
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
    <div className='LogIn w-screen h-screen flex justify-center opacity-95'>

        <div className="flex flex-col text-text_blue bg-white w-1/2 h-3/4 mt-20 rounded-md place-items-center opacity-100">
        <span className="flex flex-col w-full align-center justify-center place-items-center w-full">
            <h3 className="text-[2.1rem] flex flex-col font-bold font-bodyFont text-center pt-[3rem]">
                <p>Image Gallery App</p>
                <p>Log in</p>
            </h3>

            {/* INPUTS */}
            <div className='w-1/2 mt-[3rem] flex flex-col '>
                {/* INPUT USERNAME */}
            <span className="w-full">
                <p className="text-[13px] font-bold py-1">Username</p>

                <span className='flex flex-row w-full text-[11px] text-center text-gray-400  border py-2 rounded border-gray-400 pl-3'>
                <FaUser   className='mt-[2px] ' />
                <input type="text" placeholder='Enter Username' className='w-11/12 pl-2 outline-0' value={username} onChange={e => setUsername(e.target.value)}/>
                </span>
            </span>

            {/* INPUT PASSWORD */}
            <span className="mt-[1.5rem] w-full">
                <p className="text-[13px] py-1 font-bold">Password</p>

            <span className='flex text-center align-center text-gray-400  border py-2 px-2 rounded border-gray-400'>
                <MdLock className='' />
                <input type="password" placeholder='Enter Password' className='text-[11px] w-11/12 pl-2 outline-0' value={password} onChange={e => setPassword(e.target.value)}/>
            </span>
            </span>

            {/* FORGOT PASSWORD */}
            <span className="ml-auto">
            <Link to='/forgot-password'>
            <p className="text-[10px] font-semibold pt-1 ">Forgot Password?</p>
            </Link>
            </span>
             
            </div>

            {/* BUTTON */}
            <button type='submit' className="bg-iga_blue w-1/2 rounded text-white align-center justify-center mt-[3rem] h-[2.7rem]" onClick={handleLogin}>
            <p>LogIn</p>
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
        </div>
    </div>
  )
}

export default LogIn