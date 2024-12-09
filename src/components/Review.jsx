import React from 'react';
import Link from 'next/link';

const Review = ({type, image, name, review}) => {
  // type represent whether the review is in the recipe page or user dashboard
  // type is either 'recipe' or 'user', and image and name correspond to the type value

  return (
    <div className='flex flex-col p-8 gap-3'>
      {/* Image and name of review in recipe page or user dashboard */}
      <div className='flex flex-row items-center gap-4 w-full h-[80px]'>
        <img 
          src={image} 
          className={`min-w-[80px] h-full object-cover ${type === "user" ? "rounded-full": "rounded-none"}`}
        />
        <Link 
          href={""} 
          className={`${type === "user" ? "text-tertiary hover:text-tertiary" : "text-primary"} text-2xl font-sans font-semibold text-ellipsis overflow-hidden whitespace-nowrap`}
        >
          {name}
        </Link>
      </div>
      {/* Rating and date */}
      <div className='flex flex-row gap-1 pl-2 items-center'>
        {[1, 2, 3, 4, 5].map((star, index) => (
          <i key={index} className={`fa-star text-secondary ${review.rating >= star ? 'fa-solid' : 'fa-regular'}`}></i>
        ))}
        <p className='text-textColor ml-2'>{review.date}</p>
      </div>
      {/* Review comment and helpful count */}
      <p className={`${type === "user" ? "text-tertiary" : "text-textColor"}`}>{review.review}</p>
      <div className='flex flex-row gap-1'>
        <a href='' className='text-textColor hover:text-secondary font-normal'>
          <i className='fa-solid fa-thumbs-up mr-1'></i>
          Helpful
        </a>
        <p className='text-textColor font-normal'>({review.helpful})</p>
      </div>
    </div>
  )
}

export default Review