import React, { useState } from 'react'
import BG from '../assets/1.jfif'
import axios from 'axios'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'

export const LoggedInResetPassword = () => {
    const query = new URLSearchParams(useLocation().search);
    const email = localStorage.getItem('email');
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');
      const [newPassword, setNewPassword] = useState('');
      const [message, setMessage] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('')
      const [error, setError] = useState(null);
  
      const navigate = useNavigate();

    const handleChangePassword =  (e) => {
        e.preventDefault();
        
        if (newPassword !== confirmPassword) {
            setMessage("Passwords do not match");
            return;
        }
  
        const newData = {
            newPassword,
            userId,
            email,
            token
        }
  
        axios.post('http://localhost:5204/backend/account/homeResetPassword', newData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log('Password Changed Successfully!');
          toast('Password has been reset successfully');
          setTimeout(() => {
            navigate('/home')
        }, 3000);
        })
        .catch(error =>{
          console.error(error.response.data);
          toast('An error occurred. Please try again')
          if(error.response){
            setError(error.response.data);
          }else {
            setError('An error occurred. Please try again');
          }
        })
    };
  return (
   
         <div className='bg-white text-text_blue flex flex-row'>
            <ToastContainer/>
        <form className="flex flex-col w-3/6 pl-[5rem] pt-[6rem]" onSubmit={handleChangePassword}>
            <h1 className="text-[2rem] font-bold">Reset Password</h1>

            {/*  */}
        <div className="flex flex-col mt-[2.5rem]">
            <span className="">
                <p className="text-[14px] font-semibold mt-4">Password</p>
                <input type="password" placeholder='Enter New Password' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
            </span>

            <span className="">
                <p className="text-[14px] font-semibold mt-4">Confirm Password</p>
                <input type="password" placeholder='Enter New Password' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </span>
            
            </div>

            {/* Reset Button */}
            <button type='submit' className="bg-iga_blue w-4/5 h-[2.5rem] text-blue-100 font-medium text-[15px] mt-10 rounded" >Reset Password</button>
            {error && (
          <div className="text-red-500 mt-2">
            {typeof error === 'string' ? error : JSON.stringify(error.response, null, 2)}
          </div>
        )}
        </form>
        <div className="p-10 ">
            <img src={BG} alt="" className="rounded-md" />
        </div>
    </div>
  )
}
