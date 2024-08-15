import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart  } from "react-icons/fa";
import { FcLike  } from "react-icons/fc";
import { BiComment } from "react-icons/bi";
import CreateComment from '../components/CreateComment';
import { LuMoreVertical } from "react-icons/lu";
import { FaRegTrashAlt, FaEdit } from "react-icons/fa";


const Picture = ({img, title, id, handleImageModal, handleEdit}) => {
  const [like, setLike] = useState(<FaRegHeart/>);
  const [image, setImages] = useState('');
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const isLibrary = location.pathname === '/library';
  const [isLibraryModal, setIsLibraryModal] = useState(false);
  
  const handleLike = ()=>{
    setLike(!like);
  };


  //deleting image
  const deleteImage = async () => {
    try {
        const response = await axios.delete(`http://localhost:5204/backend/image/${id}`);
        if(response.status === 204){
            return true;
        }
    } catch (error) {
        console.error('Error1');
        return false;
    }
};

const handleDelete = async () => {
  const userConfirmed = confirm("Are you sure you want to delete this image?");

  // Proceed only if the user confirmed
  if (userConfirmed) {
      console.log(id);
      const isDeleted = await deleteImage(id);

      if (isDeleted) {
          console.log('Deleted!');
          setImages(images.filter(image => image.id !== id));
          window.location.reload();
      } else {
          console.log('Error deleting image');
      }
  } else {
      console.log('User canceled the deletion');
  }
};


  return (
    <div className='flex flex-col' >
      <div className="rounded flex w-[28.8rem] mr-[1.5rem] h-[17.5rem] text-white group overflow-hidden mt-2 " onClick={handleImageModal}>
        <img  src={img} alt="image" className="rounded-md w-[28.8rem] h-[17rem] absolute cursor-pointer" />
     <h4 className="relative text-[16px] pl-[1rem] font-semibold top-[15rem]">{title}</h4>
      </div>
      <span className='flex px-2 text-[1.3rem] cursor-pointer' >
          {like? <FaRegHeart  className='mt-1' onClick={handleLike}/>: <FcLike  className='text-[1.5rem] w-fit' onClick={handleLike}/>}
          <BiComment  className='ml-2 mt-1'
          onClick={()=> {setIsCommentOpen(true)}}
          />
      {isLibrary ? <LuMoreVertical className='ml-auto text-[1.3rem] mr-[1.5rem] cursor-pointer top-0 text-white w-[1.5rem] h-[1.5rem] rounded-full bg-gray-400' onClick={()=> setIsLibraryModal(!isLibraryModal)}/>: ''}
      </span>
      {
        isCommentOpen &&
        <CreateComment setIsCommentOpen={setIsCommentOpen} id={id}/> 
      }
      
          {
            isLibraryModal && (
              <div className="bg-white text-[18px] w-[3rem] text-gray-500 h-[4rem] flex flex-col items-center  rounded text-black font-semibold ml-auto mr-[3.6rem] mt-[-1.2rem] shadow-md shadow-gray-500">
            <FaRegTrashAlt className='mt-1  cursor-pointer hover:text-red-600' onClick={()=> handleDelete(image.id)}/>
            <FaEdit className='mt-1 pt-1 ml-1 border-t-2 border-gray-600 text-[23px] hover:text-[26px] cursor-pointer' onClick={handleEdit}/>
          </div>
            )
          }
      
      </div>
  )
}

export default Picture
