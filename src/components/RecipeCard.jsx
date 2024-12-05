import Link from 'next/link';
import React from 'react';

const RecipeCard = ({name, author, image, rating}) => {

  return (
    <div className='flex flex-col w-[250px] h-[360px] bg-white'>
        {/* image */}
        <img 
            src={image} 
            className='w-full h-[200px] object-cover' 
        />

        {/* text */}
        <div className='flex flex-col p-4'>
            <Link href={""}><h3 className='text-primary font-semibold line-clamp-2'>{name}</h3></Link>
            <div className='gap-1 flex flex-row'>by 
                <Link href={""} className='w-full truncate'>{author}</Link>
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