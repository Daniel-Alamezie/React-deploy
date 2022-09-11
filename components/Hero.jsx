import React from 'react'
import Link from 'next/link'
import { Signin } from '../pages/signIn'

// Logic for the main page 

const Hero = ({heading, about}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* overlay section  */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]'/>
      <div className='p-5 text-white z-[2]  mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{about}</p>
        <Link href='/signUp'>
        <button className='px-8 py-2 border m-1'>Create Account</button>
        </Link>
        <Link href='/signIn'>
        <button className='px-8 py-2 border m-1'>Sign In</button>
        </Link>
      </div>
  
    </div>
  )
}

export default Hero