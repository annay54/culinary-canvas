import React from "react";
import Link from "next/link";

export default function Login () {

  return (
    <div className="flex flex-col md:flex-row-reverse w-full h-fit md:h-screen">
      <div className='w-full h-52 md:w-2/5 md:h-full bg-no-repeat bg-cover bg-center md:bg-bottom bg-[url("https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      </div>
      <div className='w-full h-fit md:w-3/5 md:h-full flex flex-col items-center justify-center'>
        <form className='flex flex-col gap-4 w-3/5 md:w-1/2 my-32 md:my-0'>
          <h2 className="self-center md:self-auto">Join us</h2>
          <p>Become a member of the Culinary Canvas community.</p>
          <input type="text" placeholder='First name' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          <input type="text" placeholder='Last name' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          <input type="text" placeholder='Email' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          <input type="password" placeholder='Password' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          <button className='bg-secondary font-normal text-white p-2 rounded-lg'>Sign up</button>
          <p>Already have an account? <Link href='/login' className='text-secondary font-semibold'>Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}