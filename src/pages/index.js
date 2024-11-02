import react from 'react';
import toast from 'react-hot-toast';
import RecipeCard from '@/components/RecipeCard';
import Pagination from '@/components/Pagination';

export default function Home() {
  return (
    <div className='flex flex-col gap-4'>
      <h1>Welcome to Next.js</h1>
      <h2 className='text-primary'>Hello, world!</h2>
      
      <i className="fa-brands fa-xing"></i>
      <button onClick={() => toast('Hello, world!')}>Click me!</button>
      <input type='text' placeholder='Type something...' />
      <RecipeCard name='Steak' image={"https://images.unsplash.com/photo-1432139509613-5c4255815697?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} author='master_chief' rating={4} />
      <div className='pb-4'>
        <Pagination pageLength={10} />
      </div>
    </div>
  );
}
