import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { api } from '../../Context/useAuth';

export const CommentSection = ({pictureId}) => {
    const [comments, setComments] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchcomment();
      }, []);
    
      const fetchcomment = async () => {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
    
        try {
          const response = await axios.get(`${api}/comment`,{
            params: {
              userId
            },
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });    
          const imageComments = response.data.filter(comment => comment.imageId === pictureId);
          setComments(imageComments);       

        } catch (error) {
          console.error('Error fetching comment:', error);
          setError(error);
        }
      };

  return (
    <div className="absolute right-0 w-[18rem] max-h-[18rem] bg-white rounded text-gray-500 shadow-md shadow-gray-500 overflow-auto">
        {
            comments.map(comment=>
                <span className="flex h-fit flex-col border-b-2 px-6 py-4" key={comment.id}>
    <h1 className="font-bold text-[15px]">{comment.createdBy}</h1>
    <p className="font-semibold text-[13px]">{comment.content}</p>
    <p className="font-semibold text-[13px] ml-auto mt-1">{comment.createdOn}</p>
    </span>
            )
        }
  </div>
  )
}
