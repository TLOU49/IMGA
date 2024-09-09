import React, { useEffect, useState } from 'react'
import Picture from './Picture'
import axios from 'axios';
import { ImageModal } from '../components/layouts/ImageModal';
import { Pagination } from '../components/layouts/Pagination';
import { api } from '../Context/useAuth';

const Pictures = ({handleImageModal, searchQuery, isDescending,setIsDescending}) => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(0);


  useEffect(() => {
    fetchImages(currentPage, pageSize, isDescending);
  }, [currentPage, pageSize, isDescending]);

  const fetchImages = async (page, size, isDescending) => {
    const token = localStorage.getItem('token');
    try {
      const response = await axios.get(`${api}/image?pageNumber=${page}&pageSize=${size}&isDescending=${isDescending}`,{
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });      
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

  const searchImages =images.filter(
    (image) => image.imageTitle.toLowerCase().includes(searchQuery.toLowerCase()) || image.imageDescription.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (     
    <div className='ml-auto pl-[2rem] w-4/5 mt-[2.6rem]' >
      <div className="flex flex-wrap" >     
      {error && <div>Error: {error.message}</div>}
        {searchImages.length > 0 ? searchImages.map(image => (
          <Picture key={image.id} id={image.id} img={image.imageURL} title={image.imageTitle} desc={image.imageDescription} handleImageModal={() =>handleImageModal(image)}/>
          )) : <p className='ml-[3rem]'>No image matches search criteria </p>} 
      </div>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
    
  )
}

export default Pictures
