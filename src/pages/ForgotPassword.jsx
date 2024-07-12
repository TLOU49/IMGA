import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BG from '../assets/1.jfif'
import { toast, ToastContainer } from 'react-toastify'


export const ForgotPassword = () => {

    const [email, setEmail] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleForgotPassword = (e) => {
        e.preventDefault();

        const newData = {
            email,
            newPassword
        }
        axios.post('http://localhost:5204/backend/account/forgotPassword', newData,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
          console.log('Email has been sent successfully');
          toast('Password reset link has been sent to your email.');
          setTimeout(() => {
            navigate('/')
        }, 5000);
        })
        .catch(error => {
            console.error('Error:', error.response.data);
            if(error.response){
                setError(error.response.data);
              }else {
                setError('An error occurred. Please try again');
              }
        })
    }
  return (
    <div className='bg-white text-text_blue flex flex-row'>

        <form className="flex flex-col w-3/6 pl-[5rem] pt-[6rem]" onSubmit={handleForgotPassword}>
            <h1 className="text-[2rem] font-bold">Reset Password</h1>

            {/*  */}
        <div className="flex flex-col mt-[2.5rem]">
            <span className="">
                <p className="text-[14px] font-semibold ">Email Address</p>
                <input type="text" placeholder='Enter Email' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0' value={email} onChange={e => setEmail(e.target.value)}/>
            </span>
            
            </div>

            {/* Reset Button */}
            <button type='submit' className="bg-iga_blue w-4/5 h-[2.5rem] text-blue-100 font-medium text-[15px] mt-10 rounded" >Reset Password</button>
            {error && (
          <div className="text-red-500 mt-2">
            {typeof error === 'string' ? error : JSON.stringify(error.response, null, 2)}
          </div>
        )}
        <ToastContainer/>
        </form>
        <div className="p-10 ">
            <img src={BG} alt="" className="rounded-md" />
        </div>
    </div>
  )
}
