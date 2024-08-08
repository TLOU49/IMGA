import React, { useEffect, useState } from 'react'
import Picture from '../Pictures/Picture'
import axios from 'axios';

export const MyLibraryImage = () => {
    const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchImages(currentPage, pageSize);
  }, [currentPage, pageSize]);

  const fetchImages = async (page, size) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`http://localhost:5204/backend/image?pageNumber=${page}&pageSize=${size}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log(response.data);
      
      setImages(response.data.items);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error('Error fetching images:', error);
      setError(error);
    }
  };
  return (
    <div className='ml-auto pl-[2rem] w-4/5 mt-[2.6rem] flex flex-wrap'>
      <Picture id='1' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeMHz90UmmodZotW9A-sIM0B2ynhCI-Cxsw&s' title='Dean' desc='Description' />
      <Picture img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eSk_MS08as2T-m3Ms8cH8l6D8dykz9hFbw&s' title='Dddddddddd' desc='dddddddddd'/>
       <Picture id='1' img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeMHz90UmmodZotW9A-sIM0B2ynhCI-Cxsw&s' title='Dean' desc='Description' />
      <Picture img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3eSk_MS08as2T-m3Ms8cH8l6D8dykz9hFbw&s' title='Dddddddddd' desc='dddddddddd'/>
    </div>
    
  )
}
