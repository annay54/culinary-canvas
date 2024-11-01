import Link from 'next/link';
import React from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";


const Navbar = () => {
  const user = true; // temporary user state

  return (
    <div className='flex flex-row flex-nowrap justify-between bg-white w-full min-[850px]:h-20'>
      {/* logo and brand name */}
      <div className='flex flex-row gap-2 items-center min-[850px]:pl-[3%] lg:pl-[5%] text-secondary'>
        <i className="fa-solid fa-kitchen-set fa-2xl"></i>
        <h2 className='font-bold'>CulinaryCanvas</h2>
      </div>
      {/* nav links */}
      <div className='flex flex-row gap-6 items-center min-[850px]:pr-[3%] lg:pr-[5%]'>
        <Link href='/' className='font-normal text-xl text-textColor'>Home</Link>
        <Link href='/explore' className='font-normal text-xl text-textColor'>Explore</Link>
        <Link href='/contact' className='font-normal text-xl text-textColor'>Contact</Link>
        <Link href='/about' className='font-normal text-xl text-textColor'>About</Link>
        {/* login or account button */}
        {user ? (
          <Dropdown>
            <DropdownTrigger>
              <Button 
                color='primary'
                variant='solid'
                className='flex flex-nowrap gap-2 items-center text-white font-normal text-xl px-4 rounded-lg'
              >
                <i class="fa-regular fa-user"></i>
                Account
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color='primary'
              variant='light'
            >
              <DropdownItem key='dashboard' href='/dashboard'><p>My dashboard</p></DropdownItem>
              <DropdownItem key='create-recipe' href='/create_recipe'><p>Create recipe</p></DropdownItem>
              <DropdownItem key='logout' href='/logout'><p>Logout</p></DropdownItem>
            </DropdownMenu>
          </Dropdown>)
        : (
          <Link href='/login'>
            <button className='flex flex-nowrap gap-2 items-center bg-primary text-white font-normal text-xl px-4 rounded-lg'>
              Login
            </button>
          </Link>)}
      </div>
    </div>
  )
}

export default Navbar;