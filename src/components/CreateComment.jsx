import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import axios from 'axios';
import { api } from '../Context/useAuth';

const CreateComment = ({setIsCommentOpen, id}) => {
  const [content, setComment] = useState('');
  const [error, setError] = useState(null);

  
   const handleComment = (e)=> {
    e.preventDefault();
    const data = {
      content,
        imageId: id
      };
      axios.post(`${api}/comment/${id}`, data,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(response => {
        console.log('Response:', response.data);
        setComment('')
        setIsCommentOpen(false)
        setError(null)
      })
      .catch(error => {
        console.error('Error:', error);
  
        if(error.response){
          setError(error.response.data);
            console.log(error.response);
        }else {
          setError('An error occurred. Please try again');
        }
      })
};

  return (
  
        <form className="flex flex-col absolute  items-center w-[28rem] h-[12rem] border-text_blue border-2 rounded mt-[5.5rem] ml-2">
                <IoCloseSharp className='absolute right-0 m-2 text-[1.2rem] cursor-pointer bg-gray-100 rounded-full' onClick={()=> {setIsCommentOpen(false)}}/>

        <textarea type="text" className='h-[9rem] px-2 text-[14px] text-gray-600 w-full border-0 outline-0' value={content} onChange={e => setComment(e.target.value)}/>
        <button className='h-[2rem] bg-iga_blue w-[8rem] mt-1 rounded text-white font-semibold' onClick={handleComment}>Reply</button>
      </form>

  )
}

export default CreateComment