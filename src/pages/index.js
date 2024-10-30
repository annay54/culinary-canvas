import react from 'react';
import toast from 'react-hot-toast';

export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
      <h2 className='text-primary'>Hello, world!</h2>
      
      <i className="fa-brands fa-xing"></i>
      <button onClick={() => toast('Hello, world!')}>Click me!</button>
      <input type='text' placeholder='Type something...' />
    </div>
  );
}
