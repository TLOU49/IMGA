import React, { useState } from 'react'

export const TwoFactorAuthPage = () => {
    const [error, setError] = useState(null);

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
     <input type="text" placeholder='' className='border-[1px] rounded border-text_blue w-3/5 h-[2.5rem] outline-none px-2 text-[12px] text-gray-600'/>
     </div >


 {/* BUTTON */}
 <button type='submit' className="bg-iga_blue w-3/5 rounded text-white align-center justify-center mt-[3rem] h-[2.7rem]" >
 <p className='text-[16px] font-normal'>Login</p>
 </button>
 {error && (
<div className="text-red-500 mt-2">
{typeof error === 'string' ? error : <pre>{JSON.stringify(error, null, 2)}</pre>}
</div> 
)}
   
     </span>
    
     </div>
 </div>
  )
}
