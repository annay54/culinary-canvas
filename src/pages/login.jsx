import React, { useState } from "react";
import Link from "next/link";
import {Checkbox} from "@nextui-org/checkbox";

export default function Login () {
  const [remember, setRemember] = useState(false);

  return (
    <div className="flex flex-row w-full h-screen">
      <div className='w-2/5 h-full bg-no-repeat bg-cover bg-top bg-[url("https://plus.unsplash.com/premium_photo-1672149634560-a2848b4554cd?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      </div>
      <div className='w-3/5 h-full flex flex-col items-center justify-center'>
        <form className='flex flex-col gap-4 w-1/2'>
          <h2>Welcome</h2>
          <p>Log in to your account to share your culinary creations and review recipes from other food enthusiasts.</p>
          <input type="text" placeholder='Email' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          <input type="password" placeholder='Password' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          <Checkbox color='primary' radius="sm" onChange={() => setRemember(!remember)} checked={remember} classNames={{
              wrapper: 'border-2 rounded-lg border-secondary bg-white',
            }}
          >Remember me</Checkbox>
          <button className='bg-secondary font-normal text-white p-2 rounded-lg'>Sign in</button>
          <p>Don't have an account? <Link href='/signup' className='text-secondary font-semibold'>Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}