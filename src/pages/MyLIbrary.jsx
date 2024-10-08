import React, { useState } from 'react'
import {Pagination} from '../components/layouts/Pagination.jsx'
import { MyLibraryImage } from '../components/MyLibraryImage.jsx'
import { EditModal } from '../components/layouts/EditModal.jsx'

const MyLIbrary = () => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [ editImage, setEditImage ] = useState(null);

  const handleEdit = (picture)=> {
    setEditImage(picture);
    setIsEditModal(true)
  };

  return (
    <div className='mt-[8rem]'>
      <MyLibraryImage setIsEditModal={setIsEditModal} handleEdit={handleEdit}/>
      {
        isEditModal&& (
          <EditModal setIsEditModal={setIsEditModal} editImage={editImage}/>
        )
      }
    </div>
  )
}

export default MyLIbrary