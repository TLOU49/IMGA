import { useState } from 'react';
import { ImageModal } from '../components/layouts/ImageModal';
import SearchBar from '../components/layouts/SearchBar';
import Pictures from '../Pictures/Pictures';
import { Pagination } from '../components/layouts/Pagination';

export const Home = () => {
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ isPictureVisible, setIsPictureVisible ] = useState(true);
  const [selectedPicture, setSelectedPicture] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Image Modal/ Viewing Image
  const handleImageModal = (picture)=> {
  setIsModalOpen(true);
  setIsPictureVisible(false);
  setSelectedPicture(picture);
};

  return (
    <div className='font-bodyFont w-full '>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
        {
          isPictureVisible && <Pictures searchQuery={searchQuery} handleImageModal={handleImageModal}/>
        }
        {
            isModalOpen && <ImageModal setIsModalOpen={setIsModalOpen} setIsPictureVisible={setIsPictureVisible} selectedPicture={selectedPicture}/> 
        }
       
    </div>
  )
};