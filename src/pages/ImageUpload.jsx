import React from 'react'
import { Header } from '../components/layouts/Header'
import { IoCloudUploadOutline } from "react-icons/io5";

const ImageUpload = () => {
  return (
    <div className='w-screen'>
        <Header/>

        <div className="ml-[24rem] flex flex-col items-center my-[5rem]">
            <h2 className="text-center text-[1.6rem] font-semibold text-text_blue">Image Upload</h2>

            {/* Title Input */}
            <span className="mt-[4.5rem] text-text_blue font-medium text-[13px] w-1/2 ">
                <h3 className="font-bold">Image Title</h3>
                <input type="text" className="border-[1px] mt-1 rounded w-full border-text_blue h-[2.5rem] outline-0 px-2" />
            </span>

            {/* Description input */}
            <span className="text-text_blue font-medium text-[13px] w-1/2 mt-[1rem]">
                <h3 className="font-bold">Image Description</h3>
                <textarea name="" id="" className='border-[1px] w-full mt-2 border-text_blue rounded p-2 outline-0'/>
            </span>

            {/* Upload Div */}
            <span className="border-dashed border-2 flex flex-col items-center text-center text-iga_blue border-text_blue w-1/2 mt-[2rem] rounded h-[18rem] bg-blue-100">
            
                <IoCloudUploadOutline className='text-[7rem] mt-[2rem] '/>
            
                <p className="text-[13px] font-medium mt-[1.7rem]">Drag and Drop Files</p>
                <p className="text-[12px]">or</p>

                <input type="file" name="" id="files" className='hidden' multiple/>
                <label htmlFor="files">

                <p className='text-white bg-iga_blue mt-3 w-[7rem] h-[2rem] rounded-md text-[13px] pt-1 cursor-pointer'>Upload</p>
                </label>
            </span>
        </div>
    </div>
  )
}

export default ImageUpload
