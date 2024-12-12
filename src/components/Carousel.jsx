import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Carousel = ({recipes}) => {
  const [current, setCurrent] = useState(0);
  const length = recipes.length;
  let numRecipes = 2;

  const handlePrevious = () => {
    if (current === 0 || current - numRecipes < 0)
      return;
    setCurrent(current - numRecipes);
  }

  const handleNext = () => {
    if (current + numRecipes >= length)
      return;
    setCurrent(current + numRecipes);
  }

  return (
    <div className='flex flex-col gap-4 self-center'>
      <div className='flex flex-row gap-3 items-center'>
        <i className='fa-solid fa-chevron-left text-secondary text-xl hover:cursor-pointer' onClick={() => handlePrevious()}></i>
        {/* Map numRecipes recipes at a time*/}
        {recipes.slice(current, numRecipes).map((recipe, index) => (
          <RecipeCard key={index} name={recipe.name} author={recipe.author} image={recipe.image} rating={recipe.rating} />
        ))}
        <i className='fa-solid fa-chevron-right text-secondary text-xl hover:cursor-pointer' onClick={() => handleNext()}></i>
      </div>
      <div className='flex flex-row gap-2 justify-center'>
        {/* Display length / numRecipes circles */}
        {Array.from({length: Math.ceil(length / numRecipes)}, (_, index) => index).map((index) => (
          <i key={index} className={`fa-circle text-secondary text-xs ${index === 0 ? 'fa-solid' : 'fa-regular'}`}></i>
        ))}
      </div>
    </div>
  )
}

export default Carousel;