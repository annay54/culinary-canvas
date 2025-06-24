import React, { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { signUpAction } from "@/actions/signUp";
import { useRouter } from "next/navigation";
import { postRegister } from "./util/userAPI";

export default function Signup () {
  const [error, setError] = useState({})
  const { data: session } = useSession()
  const router = useRouter();

  if (session) {
    return (
      <div className="flex flex-col w-full h-screen gap-2 md:gap-5 items-center justify-center text-secondary">
        <i className="fa-solid fa-triangle-exclamation text-3xl md:text-5xl"></i>
        <p className="text-base mx-8 lg:text-xl font-semibold">You are already signed in with the email {session.user.email}. Please logout before trying again.</p>
      </div>
    )
  }

  const handleSubmit = async (event) => {
      event.preventDefault()
      setError({})
  
      const formData = new FormData(event.target)
      signUpAction(formData).then((res) => {
        if (res != null) {
          let dict = {}
          if (res.errors?.firstName) {
            dict['firstName'] = res.errors.firstName
          }
          if (res.errors?.lastName) {
            dict['lastName'] = res.errors.lastName
          }
          if (res.errors?.email) {
            dict['email'] = res.errors.email
          }
          if (res.errors?.password) {
            dict['password'] = res.errors.password
          }
          setError(dict)
        }
        console.log(error)
      })

      // postRegister(formData)

      // Navigate to the login page
      router.push('/login')
    }

  return (
    <div className="flex flex-col md:flex-row-reverse w-full h-fit md:h-screen">
      <div className='w-full h-52 md:w-2/5 md:h-full bg-no-repeat bg-cover bg-center md:bg-bottom bg-[url("https://images.unsplash.com/photo-1507638940746-7b17d6b55b8f?q=80&w=1789&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      </div>
      <div className='w-full h-fit md:w-3/5 md:h-full flex flex-col items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-3/5 md:w-1/2 my-32 md:my-0'>
          <h2 className="self-center md:self-auto">Join us</h2>
          <p>Become a member of the Culinary Canvas community.</p>
          <input type="text" placeholder='First name' name='firstName' required className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          {error.firstName && <p className="text-red-600 text-sm font-medium pl-4">* {error.firstName}</p>}
          <input type="text" placeholder='Last name' name='lastName' required className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          {error.lastName && <p className="text-red-600 text-sm font-medium pl-4">* {error.lastName}</p>}
          <input type="text" placeholder='Email' name='email' required className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          {error.email && <p className="text-red-600 text-sm font-medium pl-4">* {error.email}</p>}
          <input type="password" placeholder='Password' name='password' required className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          {error.password && (
            <div>
              <p className="text-red-600 text-sm font-medium pl-4">* Password must:</p>
              <ul className="text-red-600 text-sm font-medium pl-14">
                {error.password.map((err) => (
                  <li key={err} >{err}</li>
                ))}
              </ul>
            </div>)}
          <button className='bg-secondary font-normal text-white p-2 rounded-lg'>Sign up</button>
          <p>Already have an account? <Link href='/login' className='text-secondary font-semibold'>Sign in</Link></p>
        </form>
      </div>
    </div>
  )
}