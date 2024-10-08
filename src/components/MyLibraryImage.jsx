import React, { useEffect, useState } from 'react'
import Picture from '../Pictures/Picture'
import axios from 'axios';
import { api } from '../Context/useAuth';


export const MyLibraryImage = ({setIsEditModal, handleEdit}) => {
    const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchImages(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchImages = async () => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    try {
      const response = await axios.get(`${api}/image`,{
        params: {
          userId
        },
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      
      const userImages = response.data.items.filter(image => image.userId === userId);

      setImages(userImages);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(error);
    }
  };
  return (
    <div className='ml-auto pl-[2rem] w-4/5 mt-[2.6rem] flex flex-wrap'>
      {
        images.map(image =>(
          <Picture key={image.id} id={image.id} img={image.imageURL} title={image.imageTitle} desc={image.description} setIsEditModal={setIsEditModal} handleEdit={()=> handleEdit(image)}/>
        ))
      }
      {error && <div className='error'> Error: {error.message}</div>}
    </div>
    
  )
}
