import React, { use, useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Carousel = ({recipes}) => {
  const [current, setCurrent] = useState(0);
  const [numRecipes, setNumRecipes] = useState(2);
  const [showRecipes, setShowRecipes] = useState([]);
  const [pages, setPages] = useState([]);
  // 0 for mobile, 1 for tablet, 2 for desktop
  const [deviceSize, setDeviceSize] = useState(0);
  const length = recipes.length;

  useEffect(() => {
    // Detect screen size and set mobile mode
    const handleResize = () => {
      if (window.innerWidth <= 560) {
        setDeviceSize(0);
        setNumRecipes(2);
      } else if (window.innerWidth <= 890) {
        setDeviceSize(1);
        setNumRecipes(3);
      }
      else {
        setDeviceSize(2);
        setNumRecipes(4);
      }

      // Display numRecipes recipes at a time and value pages of circle when current changes
      setShowRecipes(recipes.slice(current, current + numRecipes));
      setPages(Array.from({length: Math.ceil(length / numRecipes)}).map((_, index) => index));
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check on component mount
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  } , [current, deviceSize]);

  // Handles displaying the previous recipes in list recipes starting from current - index to current
  const handlePrevious = (index) => {
    if (current === 0 || current - index < 0)
      return;
    setShowRecipes(recipes.slice(current - index, current));
    setCurrent(current - index);
  }

  // Handles displaying the next recipes in list recipes starting from current + index to current + 2*index
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
        {/* Display numRecipes recipes at a time */}
        {showRecipes.map((recipe, index) => (
          <RecipeCard key={index} name={recipe.name} author={recipe.author} image={recipe.image} rating={recipe.rating} />
        ))}
        <i 
          className={`fa-solid fa-chevron-right text-secondary text-2xl hover:cursor-pointer hover:text-primary ${current + numRecipes >= length ? 'pointer-events-none opacity-50' : ''}`} 
          onClick={() => handleNext(numRecipes)}></i>
      </div>
      <div className='flex flex-row gap-2 justify-center'>
        {/* Display length / numRecipes circles */}
        {pages.map((index) => (
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