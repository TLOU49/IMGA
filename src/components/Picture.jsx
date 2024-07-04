import React, { useState } from 'react'
import { FaRegComment, FaRegHeart  } from "react-icons/fa";
import { FcLike } from "react-icons/fc";

const Picture = ({img, title, desc}) => {
  const [like, setLike] = useState(false);
  const [tempClass, setTempClass] = useState('');

  const handleLike = ()=>{
    // like ? `<FcLikse className='mt-[2px] text-[16px]'/>`: `<FaRegHeart className='mt-1'/>`
    setLike(!like);

    setTempClass('animate-ping');

    // Remove temporary class after 1 second
    setTimeout(() => {
      setTempClass('');
    }, 5000);
  };

  return (
      <div className="rounded flex w-[26rem] mr-[1.5rem] h-[18.4rem] text-white group overflow-hidden mt-4">
        <img  src={img} alt="image" className="rounded-md w-[26rem] h-[18.4rem] absolute" />

      <span className="relative flex flex-col pl-[1.7rem] top-[10rem] w-full bg-stone-500 h-[8.4rem] rounded-b-md opacity-85">
        <h4 className="text-[17px] font-semibold">{title}</h4>
        <p className="text-[13px] mt-2 font-normal">{desc}</p>

        <div className="flex flex-row text-[13px] ml-auto mr-[2rem] cursor-pointer  lgl:translate-x-40 translate-x-40 group-hover:translate-x-0 transition-transform duration-300">
          <span className="flex hover-bg-yellow-200 hover:bg-yellow-400 rounded">
          <FaRegComment className='mt-1'/>
          <p className="mx-2">20</p>
          </span>
          <span className={`flex border-l-[1px] border-white px-2 cursor-pointer hover:bg-yellow-400 rounded`} onClick={handleLike}>
          {/* <FaRegHeart className='mt-1'/> */}
          {like? <FcLike className={`mt-[2px] text-[16px] ${setTempClass}`}/>: <FaRegHeart className='mt-1 '/>}
          <p className="ml-2">39</p>
          </span>
      </div>
      </span>
      </div>
  )
}

export default Picture
