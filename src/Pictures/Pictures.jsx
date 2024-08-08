import React, { useEffect, useState } from 'react'
import Picture from './Picture'
import axios from 'axios';
import { ImageModal } from '../components/layouts/ImageModal';
import { Pagination } from '../components/layouts/Pagination';

const Pictures = ({handleImageModal}) => {
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

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  }
  return (     
    <div className='ml-auto pl-[2rem] w-4/5 mt-[2.6rem]' >
      <div className="flex flex-wrap" >     
      {error && <div>Error: {error.message}</div>}
        {
        images.map(image => (
          <Picture key={image.id} id={image.id} img={image.imageURL} title={image.imageTitle} desc={image.imageDescription} handleImageModal={() =>handleImageModal(image)}/>
          )) } 
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
    
  )
}

export default Pictures
