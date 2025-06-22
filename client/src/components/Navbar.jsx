import Link from 'next/link';
import React from 'react';
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useSession } from "next-auth/react";
import { signInAction } from '@/actions/signIn';
import { signOutAction } from '@/actions/signOut';

const Navbar = () => {
  const { data: session } = useSession()

  return (
    <div className='flex flex-row flex-nowrap justify-between bg-white w-full min-[850px]:h-20 h-16'>
      {/* logo and brand name */}
      <a href='/' className='flex flex-row gap-2 items-center hover:no-underline hover:text-secondary pl-[3%] lg:pl-[5%] text-secondary'>
        <i className="fa-solid fa-kitchen-set fa-2xl"></i>
        <h2 className='font-bold max-[850px]:hidden'>CulinaryCanvas</h2>
      </a>
      {/* nav links for large screens*/}
      <div className='flex flex-row gap-6 items-center pr-[3%] lg:pr-[5%] max-[850px]:hidden'>
        <Link href='/' className='font-normal text-xl text-textColor'>Home</Link>
        <Link href='/explore' className='font-normal text-xl text-textColor'>Explore</Link>
        <Link href='/contact' className='font-normal text-xl text-textColor'>Contact</Link>
        <Link href='/about' className='font-normal text-xl text-textColor'>About</Link>
        {/* login or account button */}
        {session ? (
          <Dropdown>
            <DropdownTrigger>
              <Button 
                color='primary'
                variant='solid'
                className='flex flex-nowrap gap-2 items-center text-white font-normal text-xl px-4 rounded-lg'
              >
                <i className="fa-regular fa-user"></i>
                Account
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              color='primary'
              variant='flat'
            >
              <DropdownItem href='/dashboard' className='hover:no-underline py-2'><p>My dashboard</p></DropdownItem>
              <DropdownItem href='/create_recipe' className='hover:no-underline py-2'><p>Create recipe</p></DropdownItem>
              <DropdownItem href='/logout' className='hover:no-underline py-2'>
                <form action={signOutAction}>
                  <button className='flex items-start p-0 bg-transparent text-textColor hover:text-primary w-full'>
                    <p>Logout</p>
                  </button>
                </form>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>)
        : (
          <Link href='/login'>
            <form action={signInAction}>
              <button className='flex flex-nowrap gap-2 items-center bg-primary text-white font-normal text-xl px-4 rounded-lg'>
                Login
              </button>
            </form>
          </Link>)}
      </div>
      {/* nav links for small screens */}
      <div className='flex items-center min-[850px]:hidden'>
        <Dropdown>
          <DropdownTrigger>
            <Button
              className='bg-white text-secondary font-normal text-3xl rounded-lg'
            >
              <i className="fa-solid fa-bars"></i>
            </Button>
          </DropdownTrigger>
          {/* check if user is login */}
          {session ? (
            <DropdownMenu color='primary' variant='flat' className=''>
              <DropdownItem href='/' className='hover:no-underline py-2'><p>Home</p></DropdownItem>
              <DropdownItem href='/explore' className='hover:no-underline py-2'><p>Explore</p></DropdownItem>
              <DropdownItem href='/contact' className='hover:no-underline py-2'><p>Contact</p></DropdownItem>
              <DropdownItem href='/about' className='hover:no-underline py-2'><p>About</p></DropdownItem>
              <DropdownItem href='/dashboard' className='hover:no-underline py-2'><p>My dashboard</p></DropdownItem>
              <DropdownItem href='/create_recipe' className='hover:no-underline py-2'><p>Create recipe</p></DropdownItem>
              <DropdownItem href='/logout' className='hover:no-underline py-2'>
                <form action={signOutAction}>
                  <button className='flex items-start p-0 bg-transparent text-textColor hover:text-primary w-full'>
                    <p>Logout</p>
                  </button>
                </form>
              </DropdownItem>
            </DropdownMenu>
          ) : (
            <DropdownMenu color='primary' variant='flat'>
              <DropdownItem href='/' className='hover:no-underline py-2'><p>Home</p></DropdownItem>
              <DropdownItem href='/explore' className='hover:no-underline py-2'><p>Explore</p></DropdownItem>
              <DropdownItem href='/contact' className='hover:no-underline py-2'><p>Contact</p></DropdownItem>
              <DropdownItem href='/about' className='hover:no-underline py-2'><p>About</p></DropdownItem>
              <DropdownItem href='/login' className='hover:no-underline py-2'>
                <form action={signInAction}>
                  <button className='flex items-start p-0 bg-transparent text-textColor hover:text-primary w-full'>
                    <p>Login</p>
                  </button>
                </form>
              </DropdownItem>
            </DropdownMenu>
          )}
        </Dropdown>
      </div>
    </div>
  )
}

export default Navbar;