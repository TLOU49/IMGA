import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../Context/useAuth';

export const TwoFactorAuthPage = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState(null);
    const [countdown, setCountdown] = useState(()=> {
      return parseInt(localStorage.getItem('countdown'), 10 || 120);
    });

    const navigate = useNavigate();
    
    useEffect(() => {
      let timer;
      if (countdown > 0) {
        timer = setInterval(() => {
          setCountdown((prevCountDown) => {
            const newCountDown = prevCountDown - 1;
            localStorage.setItem('countdown', newCountDown);
            return newCountDown;
          })
        }, 1000);
      }else{
        clearInterval(timer);
        setError('Time expired. Please try logging in again.')
      }
      return ()=> clearInterval(timer);
    }, [countdown])
    

    const handleOTP = (e) => {

        const data = {
            otp,
            userId: localStorage.getItem('userId')
        };
    
        axios.post(`${api}/account/verify-otp`, data,{
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log('Response:', response.data);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('userName', response.data.userName);
          localStorage.setItem('email', response.data.email);
          navigate('/home')
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

  return (
    <div className='LogIn w-screen h-screen flex justify-center opacity-95 font-bodyFont'>
    <div className="flex flex-col text-text_blue bg-white w-1/2 xl:w-2/5 sm:h-4/6 md:h-3/5 mt-36 rounded-md place-items-center opacity-100">
     <span className="flex flex-col w-full align-center justify-center place-items-center w-full">
     <h3 className="text-[2.2rem] flex flex-col font-bold  text-center pt-[3rem]">
         <p>Image Gallery App</p>
     </h3>

     <span className="mx-[rem] text-center text-[12px] my-[2rem] flex flex-col">
         <p className=''>Your login is protected with an authenticator app. </p>
         <p className=''>Enter your authenticator code below.</p>
     </span>
     
     <div className="w-full flex flex-col items-center mt-6">
        <h3 className="text-[12px] font-extrabold">Authenticator Code</h3>
     <input type="text" placeholder='' className='border-[1px] rounded border-text_blue w-3/5 h-[2.5rem] outline-none px-2 text-[12px] text-gray-600' value={otp} onChange={e => setOtp(e.target.value)}/>
     </div >


 {/* BUTTON */}
 <button type='submit' className="bg-iga_blue w-3/5 rounded text-white align-center justify-center mt-[3rem] h-[2.7rem]" onClick={handleOTP}>
 <p className='text-[16px] font-normal'>Login</p>
 </button>
 {error && (
<div className="text-red-500 mt-2">
{typeof error === 'string' ? error : <pre>{JSON.stringify(error, null, 2)}</pre>}
</div> 
)}
{
  countdown > 0 && (
    <p className="">{`Time remaining to complete your authentication: ${Math.floor(countdown/60)}: ${countdown % 60 <10 ? '0': ''}${countdown % 60}`}</p>
  )
}
     </span>
    
     </div>
 </div>
  )
}
