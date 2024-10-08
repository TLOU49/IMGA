import React from 'react'
import { PiCaretLeft, PiCaretRight } from "react-icons/pi";


export const Pagination = ({ currentPage, totalPages, onPageChange}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {      
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {    
    onPageChange(page);
  };
  return (
    <div className='mt-[1.7rem] flex flex-row w-auto items-center justify-center text-text_blue cursor-pointer'>
        <PiCaretLeft className='' onClick={handlePrevious}/>
        {
          Array.from({ length: totalPages}, (_, index)=> (
            <p
            key={index}
            className={`ml-4 w-[2rem] h-[2rem] pl-[10px] pt-[4px] rounded-full ${currentPage === index + 1 ? 'bg-text_blue text-white' : ''}`}
            onClick={() => handlePageClick(index + 1)}>
            {index + 1}
          </p>
          ))
        }
        <PiCaretRight className='ml-[10px]' onClick={handleNext}/>
    </div>
  )
}
