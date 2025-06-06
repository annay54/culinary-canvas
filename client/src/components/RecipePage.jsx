import React from "react";
import RecipeTag from "./RecipeTag";

const RecipePage = ({ recipe }) => {
  const tags = ['Breakfast', 'Easy', 'Quick', 'Healthy', 'Pan fry'];

  const Instruction = ({ step, description }) => (
    <div className='flex flex-row gap-2'>
      <div className='flex w-10 h-10 shrink-0 justify-center items-center rounded-full text-primary border-2 border-primary'>
        {step}
      </div>
      <p className='flex items-center'>{description}</p>
    </div>
  );

  const Ingredient = ({ name, quantity }) => (
    <div className='flex flex-row gap-2 justify-between'>
      <p>{name}</p>
      <p className='text-textColor text-right'>{quantity}</p>
    </div>
  );

  return (
    <div className='pt-16 md:mx-[10%] mx-[5%]'>
      {/* hero */}
      <img 
        src="https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="pancake" 
        className='w-full md:w-full h-[250px] md:h-[400px] object-cover z-0 relative'
      />
      <div className='px-4 bg-white w-fit -mt-4 ml-[4%] z-40 relative'>
        <h1 className='text-secondary max-md:text-4xl max-md:py-2'>Pancakes</h1>
      </div>

      {/* favourite button */}
      <div className='flex justify-end -mt-6 md:-mt-10'>
        <button className='p-0 bg-transparent'>
          <i className='fa-star text-primary fa-2xl fa-regular'></i>
        </button>
      </div>

      <div className='flex flex-col gap-4 mt-2 md:mt-8'>
        {/* author */}
        <div className='gap-2 flex flex-row items-center'>
          <img 
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            className='w-[50px] h-[50px] object-cover rounded-full'
          />
          <h3 className='text-secondary'>perfectchef</h3>
        </div>

        <div className='flex flex-col'>
          {/* rating */}
          <div className='flex flex-row gap-2 items-center'>
            <h2 className='text-primary max-md:text-xl'>4.1</h2>
            <div className='flex flex-row gap-1'>
              {[1, 2, 3, 4, 5].map((star) => (
                <i className={`fa-star text-primary fa-lg ${4 >= star ? "fa-solid" : "fa-regular"}`} />
              ))}
            </div>
            <div>(532)</div>
          </div>

          {/* time and review */}
          <div className='flex flex-wrap md:flex-row gap-x-8'>
            <div className='flex flex-row gap-2 items-center'>
              <i className='fa-solid fa-clock text-textColor' />
              <span>20 minutes</span>
            </div>
            <div className='flex flex-row gap-2 items-center'>
              <i className='fa-solid fa-comment text-textColor' />
              <span>30 reviews</span>
            </div>
          </div>
        </div>

        {/* tags */}
        <div className='flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <RecipeTag tag={tag} />
          ))}
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      <div className='flex flex-col md:flex-row gap-8 my-8'>
        {/* instructions */}
        <div className='max-md:order-last flex flex-col gap-4 w-full'>
          <h2 className=''>Instructions</h2>
          <Instruction step={1} description='Mix flour, sugar, baking powder, and salt in a bowl.' />
          <Instruction step={2} description='Add milk, egg, and butter; mix until smooth.' />
          <Instruction step={3} description='Heat a lightly oiled griddle or frying pan over medium-high heat.' />
          <Instruction step={4} description='Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.' />
          <Instruction step={5} description='Brown on both sides and serve hot.' />
        </div>
                
        {/* ingredients */}
        <div className='flex flex-col gap-2 w-full md:w-[265px] p-4 md:p-8 h-fit bg-primary text-white'>
          <h2>Ingredients</h2>
          <p className='text-textColor'>Servings: 2</p>
          <hr className='border-1' />
          <Ingredient name='All purpose flour' quantity='2 cups' />
          <Ingredient name='Sugar' quantity='2 tbsp' />
          <Ingredient name='Baking powder' quantity='2 tsp' />
          <Ingredient name='Salt' quantity='1/2 tsp' />
          <Ingredient name='Milk' quantity='1 1/2 cups' />
          <Ingredient name='Egg' quantity='1' />
          <Ingredient name='Butter, melted' quantity='2 tbsp' />
        </div>
      </div>
    </div>
  )
}

export default RecipePage;