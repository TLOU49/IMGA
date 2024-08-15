import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaRegHeart  } from "react-icons/fa";
import { FcLike  } from "react-icons/fc";
import { BiComment } from "react-icons/bi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { CommentSection } from './CommentSection';

export const ImageModal = ({ setIsModalOpen, setIsPictureVisible, selectedPicture }) => {
  const [image, setImages] = useState('');
  const [isCommentOpen, setIsCommentOpen] = useState(false);

    const handleCloseModal = ()=> {
        setIsModalOpen(false);
        setIsPictureVisible(true)
    }

    const [like, setLike] = useState(false);

  const handleLike = ()=>{
    setLike(!like);
  };
  
  return (

    <div className="absolute modalDiv top-[14rem] w-10/12 h-2/3 font-bodyFont " key={selectedPicture.id}>
        
    <div className='relative  h-full w-5/6 rounded-md ml-[28rem] flex'>
    <IoCloseSharp className='absolute right-0 m-2 text-[1.6rem] cursor-pointer bg-gray-100 rounded-full' onClick={handleCloseModal}/>
        <img className='w-full h-full rounded-md' src={selectedPicture.imageURL} alt="" />
        <span className="absolute bottom-0 bg-stone-500	h-1/4 w-full rounded-b-md opacity-75 flex flex-col py-[1.2rem] px-[2rem] text-white font-medium">
            <h3 className="">{selectedPicture.imageTitle}</h3>
            <p className="mt-4">{selectedPicture.imageDescription}</p>
        </span>

    </div>
    <span className='mt-2 flex px-2 text-[1.3rem] cursor-pointer ml-[28rem]' >
          {like? <FaRegHeart  className='mt-1' onClick={handleLike}/>: <FcLike  className='text-[1.5rem] w-fit' onClick={handleLike}/>}
          <BiComment className='ml-2 mt-1' /> 
    </span>

    <CommentSection pictureId={selectedPicture.id}/>
   
    </div>
  )
}
