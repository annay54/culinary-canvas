import React, { useState } from "react";
import Link from "next/link";
import {Checkbox} from "@nextui-org/checkbox";
import { useSession } from "next-auth/react";
import { signInAction } from "@/actions/signIn";

export default function Login () {
  const [remember, setRemember] = useState(false)
  const [error, setError] = useState({})
  const { data: session } = useSession()
  
  // user is already signed in
  if (session) {
    return (
      <div>
        Signed in as {session.user.email}
      </div>
    )
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    formData.set('remember', event.target.remember.checked)
    signInAction(formData).then((res) => {
      if (res != null) {
        let dict = {}
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
  }

  return (
    <div className="flex flex-col md:flex-row w-full h-fit md:h-screen">
      <div className='w-full h-52 md:w-2/5 md:h-full bg-no-repeat bg-cover bg-center md:bg-top bg-[url("https://images.unsplash.com/reserve/EnF7DhHROS8OMEp2pCkx_Dufer%20food%20overhead%20hig%20res.jpg?q=80&w=1778&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")]'>
      </div>
      <div className='w-full h-fit md:w-3/5 md:h-full flex flex-col items-center justify-center'>
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-3/5 md:w-1/2 my-32 md:my-0'>
          <h2 className="self-center md:self-auto">Welcome</h2>
          <p>Log in to your account to share your culinary creations.</p>
          <input type="text" placeholder='Email' name='email' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          {error.email && <p className="text-red-600 text-sm font-medium pl-4">* {error.email}</p>}
          <input type="password" placeholder='Password' name='password' className='px-4 py-3 border-2 rounded-lg border-secondary text-primary placeholder:text-primary font-normal placeholder:font-normal text-base placeholder:text-base'/>
          {error.password && (
            <div>
              <p className="text-red-600 text-sm font-medium pl-4">* Password must:</p>
              <ul className="text-red-600 text-sm font-medium pl-14">
                {error.password.map((err) => (
                  <li key={err} >{err}</li>
                ))}
              </ul>
            </div>)}
          <Checkbox color='primary' radius="sm" name='remember' onChange={() => setRemember(!remember)} checked={remember} classNames={{
            wrapper: 'border-2 rounded-lg border-secondary bg-white',
            label: 'text-textColor',}}
          >
            Remember me
          </Checkbox>
          <button className='bg-secondary font-normal text-white p-2 rounded-lg'>Sign in</button>
          <p>Don't have an account? <Link href='/signup' className='text-secondary font-semibold'>Sign up</Link></p>
        </form>
      </div>
    </div>
  )
}