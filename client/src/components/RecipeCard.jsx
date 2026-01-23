import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getUserByEmail } from '@/pages/util/userAPI';

const RecipeCard = ({recid, name, author, image, rating}) => {
  const [uid, setUid] = useState(0);
  const username = author.split("@")[0];

  useEffect(() => {
    getUserByEmail({ email: author, password: null }).then((res) => {
      console.log("user id is", res)
      setUid(res)
    })
  }, [author])

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
            <Link href={`/recipe/${recid}`}><h3 className='text-primary text-lg xl:text-2xl font-semibold line-clamp-2'>{name}</h3></Link>
            <div className='gap-1 flex flex-row text-[14px] xl:text-base'>by 
                <Link href={`/account/${username}%40${uid}`} className='w-full truncate text-[14px] xl:text-base'>{username}</Link>
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