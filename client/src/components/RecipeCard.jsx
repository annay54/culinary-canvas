import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const RecipeCard = ({name, author, image, rating}) => {

  return (
    <div className='flex flex-col w-[210px] bg-white'>
        {/* image */}
        {image ? (
          <img 
            src={image} 
            className='w-full h-[150px] object-cover' 
          />
        ) : (
          <Image src='/default-image.jpg' alt='Default image' width={300} height={150} />
        )}

        {/* text */}
        <div className='flex flex-col p-4'>
            <Link href={""}><h3 className='text-primary text-lg xl:text-2xl font-semibold line-clamp-2'>{name}</h3></Link>
            <div className='gap-1 flex flex-row text-[14px] xl:text-base'>by 
                <Link href={""} className='w-full truncate text-[14px] xl:text-base'>{author.split("@")[0]}</Link>
            </div>
        </div>

        {/* rating */}
        <div className='flex flex-row gap-1 pl-4 pb-6'>
            {[1, 2, 3, 4, 5].map((star, index) => (
                <i aria-hidden key={index} className={`fa-star text-secondary ${rating >= star ? 'fa-solid' : 'fa-regular'}`}></i>
            ))}
        </div>
    </div>
  )
}

export default RecipeCard