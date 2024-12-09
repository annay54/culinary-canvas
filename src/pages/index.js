import react from 'react';
import toast from 'react-hot-toast';
import RecipeCard from '@/components/RecipeCard';
import Pagination from '@/components/Pagination';
import RecipeTag from '@/components/RecipeTag';
import Review from '@/components/Review';

export default function Home() {
  const tags = ['Breakfast', 'Easy', 'Quick', 'Healthy', 'Pan fry'];
  const review1 = {
    rating: 4,
    review: 'This is a great recipe!',
    date: '10/10/2021',
    helpful: 5,
  };
  const review2 = {
    rating: 5,
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut luctus mauris a sem volutpat sodales. Suspendisse potenti. Quisque eros est, volutpat ut magna sed, eleifend interdum mi. Donec a orci lacinia, interdum mi non, euismod libero. Aenean ac maximus quam. Ut quis ligula eros. Maecenas condimentum neque sit amet purus feugiat, eget sodales erat scelerisque.',
    date: '02/21/2023',
    helpful: 2,
  };

  return (
    <div className='flex flex-col gap-4'>
      <h1>Welcome to Next.js</h1>
      <h2 className='text-primary'>Hello, world!</h2>
      
      <i className="fa-brands fa-xing"></i>
      <button onClick={() => toast('Hello, world!')}>Click me!</button>
      <input type='text' placeholder='Type something...' />
      <div className='flex flex-wrap flex-row gap-2'>
        {tags.map((tag) => (
          <RecipeTag tag={tag} />
        ))}
      </div>
      <RecipeCard name='Steak' image={"https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} author='master_chief' rating={4} />
      <hr className='border-secondary'/>
      <Review type='recipe' image={"https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name='Steak dsfsfsfsfsfghfhr dfsf sdadsdfdsfsfsfsfsdfssssssssssssssssssssssssssssssssssssss' review={review1} />
      <hr className='border-secondary'/>
      <div className='bg-primary'>
        <Review type='user' image={"https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} name='user-101' review={review2} />
      </div>
      <hr className='border-secondary'/>
      <div className='pb-4'>
        <Pagination pageLength={10} />
      </div>
    </div>
  );
}
