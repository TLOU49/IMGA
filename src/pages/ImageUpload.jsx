import React, { useCallback, useEffect, useState } from 'react'
import { IoCloudUploadOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDropzone} from 'react-dropzone'
import { api } from '../Context/useAuth';


const ImageUpload = () => {
    const [imageTitle, setImageTitle] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    const [imageURL, setImageURL] = useState(null);
    const [categoryId, setCategoryId] = useState('');
    const [error, setError] = useState(null);
    const [categories, setCategories] = useState([]);

    const userId = localStorage.getItem('userId') 
  
    const navigate = useNavigate();
  
    const handleFileChange = (event) => {
        console.log(event.target.files[0]);
        setImageURL(event.target.files[0]);
    };

    const fetchCategory = async ()=> {
        try {
            const category = await axios.get(`${api}/category`, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setCategories(category.data);
            console.log(category.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
      fetchCategory();
    }, [])

    const handleCategoryChange = (e) => {
        setCategoryId(e.target.value)
    };
    

    const handleImageUpload = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('imageTitle', imageTitle);
        formData.append('imageDescription', imageDescription);
        formData.append('imageURL', imageURL);
        formData.append('categoryId', categoryId);
        formData.append('userId', userId);


        try {
            const response = await axios.post(`${api}/image`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            console.log('Upload successful:', response.data);
            toast('Upload successful!');
            setTimeout(() => {
                navigate('/home')
            }, 5000);
        } catch (error) {
            
        if(error.response){
            setError(error.response.data);
              console.log(error.response.data);
          }else {
            setError('An error occurred. Please try again');
          }
            console.error("Error uploading image", error);
            toast(error.response.data)
        }
    };

    // Drag & Drop
    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            console.log(acceptedFiles[0]); 
            setImageURL(acceptedFiles[0]);
        }
    }, []);

    const {getRootProps, getInputProps } = useDropzone({onDrop});
   
  return (
    <div className='h-auto ml-[18rem] w-4/5'>
        <ToastContainer/>

        <div className="flex flex-col items-center my-[5rem] ">
            <h2 className="text-center text-[1.6rem] mt-[-2rem] mb-[3rem] font-semibold text-text_blue" onClick={fetchCategory}>Image Upload</h2>

            <form action="" className='w-1/2' onSubmit={handleImageUpload}>

            {/* imageTitle Input */}
            <span className="text-text_blue font-medium text-[13px] w-full ">
                <h3 className="font-bold">Image Title</h3>
                <input type="text" className="border-[1px] mt-1 rounded w-full border-text_blue h-[2.5rem] outline-0 px-2" onChange={e => setImageTitle(e.target.value)} required/>
            </span>

            {/* categoryId input */}
            <span className="text-text_blue font-medium text-[13px] w-full ">
                <h3 className="font-bold mt-[1rem]">Category</h3>
                <select name="category" id="category-select" value={categoryId} onChange={handleCategoryChange} className='border-[1px] mt-1 rounded w-full border-text_blue h-[2.5rem] outline-0 px-2 cursor-pointer'>
                  <option value="" disabled>Select a Category</option>
                        {
                            categories.map(
                                category => (
                                    <option key={category.id} value={category.id} >
                                        {category.categoryName}
                                    </option>
                                )
                            )
                        }
                    
                   
                </select>
            </span>

            {/* imageDescription input */}
            <span className="text-text_blue font-medium text-[13px] w-full ">
                <h3 className="font-bold mt-[1rem]">Image Description</h3>
                <textarea name="" id="" className='border-[1px] w-full mt-2 border-text_blue rounded p-2 outline-0' onChange={e => setImageDescription(e.target.value)} required/>
            </span>


            {/* Upload Div */}
            <span {...getRootProps()} className="border-dashed border-2 flex flex-col items-center text-center text-iga_blue border-text_blue w-full mt-[2rem] rounded h-[18rem] bg-blue-100">
            
                <IoCloudUploadOutline className='text-[7rem] mt-[2rem] '/>
            
                <p className="text-[13px] font-medium mt-[1.7rem]">Drag and Drop Files</p>
                <p className="text-[12px]">or</p>

                <input type="file" name="" id="files" className='hidden' multiple onChange={handleFileChange} {...getInputProps()} />
                <label htmlFor="files">

                <p className='text-white bg-iga_blue mt-3 w-[7rem] h-[2rem] rounded-md text-[13px] pt-1 cursor-pointer'>Upload</p>
                </label>
                {imageURL && <p className="text-[13px] text-gray-500 font-medium my-[.5rem]">{imageURL.name}</p>}
            </span>

            {error && <p className="text-red-500 mt-2">{error}</p>}
            <button type='submit' className="bg-iga_blue w-full mt-[2rem] h-[2.5rem] text-white rounded-md">Submit</button>
            </form>

        </div>
    </div>
  )
}

export default ImageUpload
