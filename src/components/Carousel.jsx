import React, { use, useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Carousel = ({recipes}) => {
  const [current, setCurrent] = useState(0);
  const [showRecipes, setShowRecipes] = useState([]);
  const length = recipes.length;
  let numRecipes = 2;

  useEffect(() => {
    setShowRecipes(recipes.slice(current, current + numRecipes));
  } , [current]);

  const handlePrevious = (index) => {
    if (current === 0 || current - index < 0)
      return;
    setShowRecipes(recipes.slice(current - index, current));
    setCurrent(current - index);
  }

  const handleNext = (index) => {
    if (current + index >= length)
      return;
    setCurrent(current + index);
    setShowRecipes(recipes.slice(current, current + index));
  }

  return (
    <div className='flex flex-col gap-4 self-center'>
      <div className='flex flex-row gap-3 items-center'>
        <i 
          className={`fa-solid fa-chevron-left text-secondary text-2xl hover:cursor-pointer hover:text-primary ${current === 0 ? 'pointer-events-none opacity-50' : ''}`} 
          onClick={() => handlePrevious(numRecipes)}></i>
        {/* Map numRecipes recipes at a time*/}
        {showRecipes.map((recipe, index) => (
          <RecipeCard key={index} name={recipe.name} author={recipe.author} image={recipe.image} rating={recipe.rating} />
        ))}
        <i 
          className={`fa-solid fa-chevron-right text-secondary text-2xl hover:cursor-pointer hover:text-primary ${current + numRecipes >= length ? 'pointer-events-none opacity-50' : ''}`} 
          onClick={() => handleNext(numRecipes)}></i>
      </div>
      <div className='flex flex-row gap-2 justify-center'>
        {/* Display length / numRecipes circles */}
        {Array.from({length: Math.ceil(length / numRecipes)}, (_, index) => index).map((index) => (
          <i key={index} 
            className={`fa-circle text-secondary text-xs hover:cursor-pointer hover:text-primary ${index === current / numRecipes ? 'fa-solid' : 'fa-regular'}`}
            onClick={() => {
              if (index < current / numRecipes)
                handlePrevious(((current / numRecipes) - index) * numRecipes);
              else if (index > current / numRecipes)
                handleNext((index - (current / numRecipes)) * numRecipes);
              }}
          ></i>
        ))}
      </div>
    </div>
  )
}

export default Carousel;