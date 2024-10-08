import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { toast } from 'react-toastify';
import { api } from '../../Context/useAuth';
import axios from 'axios';

export const EditModal = ({setIsEditModal, editImage}) => {
    const [imageTitle, setimageTitle] = useState(editImage.imageTitle);
    const [imageDescription, setimageDescription] = useState(editImage.imageDescription);
    const [error, setError] = useState(null);
    const [imageURL, setImageURL] = useState(editImage.imageURL);
    
    const userId = localStorage.getItem('userId');
    
    const handleImageEdit = async (e) => {
        e.preventDefault();
        
        const formData = {

            imageTitle,
            imageDescription,
            imageURL
          }

        
        try {
            console.log('New Form Data',formData);
            
            const response = await axios.put(`${api}/image/${editImage.id}`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Edit successful:', response.data);
            toast.success('Edit successful!');
            setIsEditModal(false);
            } catch (error) {
                
                if(error.response){
                    setError(error.response.data);
                    console.log(error.response.data);
                }else {
            setError('An error occurred. Please try again');
          }
          console.error("Error editing image", error);
        }
    };
    return (
        <div className="absolute modalDiv top-[14rem] w-8/12 h-4/6 font-bodyFont" key={editImage.id}>
        
        <form className='relative  h-full w-5/6 rounded-md ml-[28rem] flex' onSubmit={handleImageEdit}>
        <IoCloseSharp className='absolute right-0 m-2 text-[1.6rem] cursor-pointer bg-gray-100 rounded-full' onClick={()=> setIsEditModal(false)}/>
            <img className='w-full h-full rounded-md' src={editImage.imageURL} alt={editImage.imageTitle} />
            <span className="absolute bottom-0 h-1/4 w-full rounded-b-md opacity-75 items-center flex flex-col py-[1.2rem] px-[2rem] text-white font-medium">
                <input type="text" className="rounded h-[2rem] text-black text-[14px] px-2 border-0 outline-0 w-11/12" value={imageTitle} onChange={e => setimageTitle(e.target.value )}/>
                <textarea name="" className='mt-2 rounded h-[3.5rem] text-black text-[14px] px-2 border-0 outline-0 w-11/12' id="" value={imageDescription} onChange={e => setimageDescription(e.target.value)}/>
                <button className="bg-iga_blue rounded w-[6rem] h-[3rem] mt-2 text-[14px] font-semibold">Submit</button>
            </span>

        </form>
        </div>
  )
}
