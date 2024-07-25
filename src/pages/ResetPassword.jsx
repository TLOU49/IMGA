import React, { useState } from 'react'
import BG from '../assets/1.jfif'
import axios from 'axios'
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom'

export const ResetPassword = () => {

  // const [searchParams] = useSearchParams();
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');
    const userId = query.get('userId')
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    // const handleResetPassword = async (e) => {
    //     e.preventDefault();

    //     // const newData = {
    //     //     email,
    //     //     newPassword
    //     // }
    //     // axios.post('http://localhost:5204/backend/account/resetPassword', newData,{
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     }
    //     // })
    //     // .then(response => {
    //     //     alert('Password has been reset successfully');
    //     //     navigate('/');
    //     // })
    //     // .catch(error => {
    //     //     console.error('Error:', error.response.data);
    //     //     if(error.response){
    //     //         setError(error.response.data);
    //     //       }else {
    //     //         setError('An error occurred. Please try again');
    //     //       }
    //     // })
    //     // if (!newPassword) {
    //     //     setError('Please enter a new password.');
    //     //     return;
    //     // }

    //     // const response = await fetch('http://localhost:5204/backend/account/resetPassword', {
    //     //     method: 'POST',
    //     //     headers: {
    //     //         'Content-Type': 'application/json'
    //     //     },
    //     //     body: JSON.stringify({token, newPassword})
    //     // });
    //     if (!newPassword) {
    //         setError('Please enter a new password.');
    //         return;
    //       }
      
    //       try {
    //         const response = await axios.post('http://localhost:5204/backend/account/resetPassword', {
    //           token,
    //           newPassword
    //         }, {
    //           headers: {
    //             'Content-Type': 'application/json'
    //           }
    //         });
      
    //         if (response.status === 200) {
    //           setError(null);
    //           navigate('/login');
    //         } else {
    //           setError('An error occurred. Please try again');
    //         }
    //       } catch (error) {
    //         setError(error.response ? error.response.data : 'An error occurred. Please try again');
    //       }
    // }

    const handleResetPassword =  (e) => {
      e.preventDefault();
      
      if (newPassword !== confirmPassword) {
          setMessage("Passwords do not match");
          return;
      }

      const newData = {
              token,
              newPassword,
              userId
      }

      axios.post('http://localhost:5204/backend/account/resetPassword', newData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(userId);
      })
      .catch(error =>{
        console.log(decodeURIComponent(token));
        console.error(error.response.data);
        if(error.response){
          setError(error.response.data);
        }else {
          setError('An error occurred. Please try again');
        }
      })
      // try {
      //     const response = axios.post('http://localhost:5204/backend/account/resetPassword', {
      //         token,
      //         newPassword,
      //         userId
      //     });
      //     console.log(response.data);
      //     setMessage(response.data);
      // } catch (error) {
      //     setMessage(error.response.data);
      // }
  };

  return (
    <div className='bg-white text-text_blue flex flex-row'>
      {/* {message && <p>{message}</p>} */}
        <form className="flex flex-col w-3/6 pl-[5rem] pt-[6rem]" onSubmit={handleResetPassword}>
            <h1 className="text-[2rem] font-bold">Reset Password</h1>

            {/*  */}
        <div className="flex flex-col mt-[2.5rem]">
            {/* <span className="">
                <p className="text-[14px] font-semibold ">Email Address</p>
                <input type="text" placeholder='Enter Email' className='border-[1px] border-text_blue rounded text-[13px] h-[2rem] w-4/5 px-2 outline-0' value={email} onChange={e => setEmail(e.target.value)}/>
            </span> */}

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
