import react from 'react';
import Carousel from '@/components/Carousel';
import IngrStep from '@/components/IngrStep';

export default function Home() {
  const recipes = [{
    name: 'Steak 1',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }, {
    name: 'Steak 2',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }, {
    name: 'Steak 3',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }, {
    name: 'Steak 4',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }, {
    name: 'Steak 5',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }, {
    name: 'Steak 6',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }, {
    name: 'Steak 7',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }, {
    name: 'Steak 8',
    author: 'master_chief',
    image: 'https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    rating: 4,
  }];

  const RecipeCarousel = ({ recipes, title }) => {
    return (
      <div className='flex flex-col gap-4 w-4/5 h-fit self-center px-4 sm:px-10 py-5'>
        <h2 className='text-secondary max-sm:text-2xl font-medium sm:font-semibold'>{title}</h2>
        <Carousel recipes={recipes} />
      </div>
    )
  }

  return (
    <div className='flex flex-col'> 
      <div className='flex self-center w-3/4  h-[300px] sm:h-[400px] 2xl:h-[700px] items-end lg:items-center lg:pl-0 pl-8 mt-14 bg-no-repeat bg-cover bg-top bg-[url("https://plus.unsplash.com/premium_photo-1672149634560-a2848b4554cd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
        <div className='h-fit max-w-sm max-sm:w-2/3 md:max-w-lg xl:w-1/2 lg:px-7 py-12 bg-white bg-opacity-60'>
          <h1 className='text-secondary lg:font-bold mx-9 max-sm:mx-4 max-md:text-4xl max-sm:text-3xl '>Welcome to Culinary Canvas</h1>
        </div>
      </div>
      <IngrStep type='ingredients' list={[{ item: 'Flour', measurement: 'cup', quantity: 1 }, { item: 'Sugar', measurement: 'cup', quantity: 1 }]} />
      <p className='self-center w-3/4 2xl:w-3/5 px-8 my-8'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris a sem volutpat sodales. Suspendisse potenti. Quisque eros est, volutpat ut magna sed, eleifend interdum mi. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris a sem volutpat sodales. Suspendisse potenti. Quisque eros est, volutpat ut magna sed, eleifend interdum mi. 
      </p>
      <div className='flex flex-col gap-4 md:gap-6 w-full h-fit items-center px-4 py-10 my-4 bg-primary'>
        <h2 className='text-white font-normal text-2xl max-md:text-xl'>Subscribe to get the latest recipes!</h2>
        <div className='flex gap-4'>
          <input className='p-2 w-1/2 sm:w-3/4 max-sm:text-sm rounded-xl bg-tertiary' placeholder='Email Address' />
          <button className='px-4 py-2 max-sm:text-sm rounded-xl bg-secondary text-white text-nowrap'>Sign up</button>
        </div>
      </div>
      <RecipeCarousel recipes={recipes} title='Popular Recipes' />
      <RecipeCarousel recipes={recipes} title='Recommended Recipes' />
      <div className='h-20'></div>
    </div>
  );
}
