import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const Social = ({ icon, link }) => {
        return (
            <Link href={link} target='_blank' rel='noreferrer' className='flex w-10 h-10 items-center justify-center border border-white text-white hover:no-underline hover:text-white'>
                <i className={`fa-brands fa-${icon}`}></i>
            </Link>
        )
    }

    return (
        <div className='flex flex-col p-8 sm:px-24 sm:py-14 lg:py-24 w-full bg-secondary text-white'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-y-8'>
            {/* logo and brand name */}
                <div className='flex flex-row gap-2 items-center lg:pl-[5%] text-white'>
                    <i className="fa-solid fa-kitchen-set fa-2xl"></i>
                    <h2 className='font-bold'>CulinaryCanvas</h2>
                </div>
            
                {/* links */}
                <div className='grid grid-cols-1 min-[380px]:grid-cols-2 max-[380px]:text-center gap-x-12 gap-y-2 w-full md:w-[50%]'>
                    <Link href='/'>Home</Link>
                    <Link href='/about'>About us</Link>
                    <Link href='/explore'>Explore recipes</Link>
                    <Link href='/contact'>Contact</Link>
                    <Link href='/login'>Login</Link>
                    <Link href='/faq'>FAQ</Link>
                </div>
            </div>
            <hr className='my-8' />
            <div className='flex flex-wrap lg:flex-row justify-center gap-y-8 gap-x-24'>
                {/* socials */}
                <div className='flex flex-col gap-2'>
                    <h3>Get in touch</h3>
                    <div className='flex flex-row gap-4'>
                        <Social icon='facebook-f' link='https://facebook.com' />
                        <Social icon='x-twitter' link='https://twitter.com' />
                        <Social icon='linkedin-in' link='https://linkedin.com' />
                        <Social icon='instagram' link='https://instagram.com' />
                    </div>
                </div>

                {/* subscription */}
                <div className='flex flex-col gap-2'>
                    <h3>Subscribe</h3>
                    <form className='flex max-[460px]:flex-col flex-row gap-4'>
                        <input type='email' placeholder='Email address' className='max-[460px]:w-full' />
                        <button className='bg-primary text-white max-[460px]:w-full'>Subscribe</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer