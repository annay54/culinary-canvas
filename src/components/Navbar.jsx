import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex flex-row flex-nowrap justify-between bg-white w-full min-[850px]:h-20'>
      {/* logo and brand name */}
      <div className='flex flex-row gap-2 items-center min-[850px]:pl-[3%] lg:pl-[5%] text-secondary'>
        <i className="fa-solid fa-kitchen-set fa-2xl"></i>
        <h2 className='font-bold'>CulinaryCanvas</h2>
      </div>
      {/* nav links */}
      <div className='flex flex-row gap-6 items-center min-[850px]:pr-[3%] lg:pr-[5%]'>
        <Link href='/' className='font-normal text-xl'>Home</Link>
        <Link href='/explore' className='font-normal text-xl'>Explore</Link>
        <Link href='/contact' className='font-normal text-xl'>Contact</Link>
        <Link href='/about' className='font-normal text-xl'>About</Link>
        <Link href='/login'>
          <button className='flex flex-nowrap gap-2 items-center bg-primary text-white font-normal text-xl px-4 rounded-lg'>
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar;