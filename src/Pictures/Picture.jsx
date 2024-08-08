import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegHeart  } from "react-icons/fa";
import { FcLike  } from "react-icons/fc";
import { BiComment } from "react-icons/bi";

const Picture = ({img, title, desc, id, handleImageModal}) => {
  const [like, setLike] = useState(<FaRegHeart/>);
  const [image, setImages] = useState('');

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
      <div className="rounded flex w-[28.8rem] mr-[1.5rem] h-[17.5rem] text-white group overflow-hidden mt-2" onClick={handleImageModal}>
        <img  src={img} alt="image" className="rounded-md w-[28.8rem] h-[17rem] absolute cursor-pointer" />
     <h4 className="relative text-[16px] pl-[1rem] font-semibold pt- top-[15rem]">{title}</h4>
      </div>
      <span className=' flex px-2 text-[1.3rem] cursor-pointer' >
          {like? <FaRegHeart  className='mt-1' onClick={handleLike}/>: <FcLike  className='text-[1.5rem] w-fit' onClick={handleLike}/>}
          <BiComment  className='ml-2 mt-1'  onClick={()=> handleDelete(image.id)}/>
      </span>
      </div>
  )
}

export default Picture
