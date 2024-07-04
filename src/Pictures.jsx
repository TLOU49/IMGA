import React, { useEffect, useState } from 'react'
import Picture from './components/Picture'
import axios from 'axios';

const Pictures = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get("http://localhost:5204/backend/image", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => {
      console.log(response.data);
      setImages(response.data)
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      setError(error);
    })
  }, []);
  return (
    <div className='ml-[28rem] w-fit h-screen '>
      <div className="flex flex-wrap">
        {images.map(image => (
            <Picture key={image.id} img={image.imageURL} title={image.imageTitle} desc={image.imageDescription} />
        ))}
      </div>
    </div>
  )
}

export default Pictures
