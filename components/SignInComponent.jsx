import React from 'react'
import { FaPassport } from 'react-icons/fa'


export const SignInComponent = () => {
  
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-center bg-cover'>
      <div>
        <form>
          <div><input className='m-3 rounded shadown md:' name='email' type='email' placeholder='Email@..com.......'
          /></div>
          <div><input className='m-3 rounded shadown md:' type='password' name='password' placeholder='password'/>
          </div>
          <button><input className='m-3 rounded shadown md:'/></button>
        </form>
      </div>
    </div>
  )
}
export default SignInComponent
