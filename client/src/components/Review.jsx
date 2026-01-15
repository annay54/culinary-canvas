import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserByEmail } from '@/pages/util/userAPI';

const Review = ({type, image, name, link, review}) => {
  // type represent whether the review is in the recipe page or user dashboard
  // type is either 'recipe' or 'user', and image and name correspond to the type value
  // if type is 'user', then name will be the email of user
  const [uid, setUid] = useState(0);
  const username = name.split("@")[0];
  useEffect(() => {
    if (type === "user") {
      getUserByEmail({ email: name, password: null }).then((res) => {
        console.log("user id is", res)
        setUid(res)
      })
    }
    
  }, [name])

  return (
    <div className='flex flex-col p-5 gap-3'>
      {/* Image and name of review in recipe page or user dashboard */}
      <div className='flex flex-row items-center gap-4 w-full h-[80px]'>
        <img 
          src={image} 
          className={`min-w-[80px] h-full object-cover ${type === "user" ? "rounded-full": "rounded-none"}`}
        />
        <Link 
          href={`${type === "user" ? `/account/${username}%40${uid}` : `/recipe/${link}`}`} 
          className={`${type === "user" ? "text-tertiary hover:text-tertiary" : "text-primary"} text-2xl font-sans font-semibold text-ellipsis overflow-hidden whitespace-nowrap`}
        >
          {type === "user" ? username : name}
        </Link>
      </div>
      {/* Rating and date */}
      <div className='flex flex-row gap-1 pl-2 items-center'>
        {[1, 2, 3, 4, 5].map((star, index) => (
          <i aria-hidden key={index} className={`fa-star text-secondary ${review.rating >= star ? 'fa-solid' : 'fa-regular'}`}></i>
        ))}
        <p className='text-textColor ml-2'>{review.created_at}</p>
      </div>
      {/* Review comment and helpful count */}
      <p className={`${type === "user" ? "text-tertiary" : "text-textColor"}`}>{review.comment}</p>
      <div className='flex flex-row gap-1'>
        <a href='' className='text-textColor hover:text-secondary font-normal'>
          <i aria-hidden className='fa-solid fa-thumbs-up mr-1'></i>
          Helpful
        </a>
        <p className='text-textColor font-normal'>({review.helpful})</p>
      </div>
    </div>
  )
}

export default Review