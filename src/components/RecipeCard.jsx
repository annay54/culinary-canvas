import Link from 'next/link';
import React from 'react';

const RecipeCard = ({name, author, image, rating}) => {

  return (
    <div className='flex flex-col w-[150px] h-[280px] sm:w-[250px] sm:h-[360px] bg-white'>
        {/* image */}
        <img 
            src={image} 
            className='w-full h-[150px] sm:h-[200px] object-cover' 
        />

        {/* text */}
        <div className='flex flex-col p-4'>
            <Link href={""}><h3 className='text-primary text-lg sm:text-2xl font-semibold line-clamp-2'>{name}</h3></Link>
            <div className='gap-1 flex flex-row text-xs sm:text-base'>by 
                <Link href={""} className='w-full truncate text-xs sm:text-base'>{author}</Link>
            </div>
        </div>

        {/* rating */}
        <div className='flex flex-row gap-1 pl-4'>
            {[1, 2, 3, 4, 5].map((star, index) => (
                <i key={index} className={`fa-star text-secondary ${rating >= star ? 'fa-solid' : 'fa-regular'}`}></i>
            ))}
        </div>
    </div>
  )
}

export default RecipeCard