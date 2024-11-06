import React from 'react';

const RecipeTag = ({tag}) => {

  return (
    <div className='bg-secondary px-6 py-2 w-fit rounded-full max-[850px]:px-4'>
      <p className='text-white font-normal text-center max-[850px]:text-base'>{tag}</p>
    </div>
  )
}

export default RecipeTag