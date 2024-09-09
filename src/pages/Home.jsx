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
  const [isDescending, setIsDescending] = useState(true);

  // Image Modal/ Viewing Image
  const handleImageModal = (picture)=> {
  setIsModalOpen(true);
  setIsPictureVisible(false);
  setSelectedPicture(picture);
};

  return (
    <div className='font-bodyFont w-screen '>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} isDescending={isDescending} setIsDescending={setIsDescending}/>
        {
          isPictureVisible && <Pictures searchQuery={searchQuery} handleImageModal={handleImageModal} isDescending={isDescending} />
        }
        {
            isModalOpen && <ImageModal setIsModalOpen={setIsModalOpen} setIsPictureVisible={setIsPictureVisible} selectedPicture={selectedPicture}/> 
        }
       
    </div>
  )
};