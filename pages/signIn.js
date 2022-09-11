import React from 'react'
import Head from 'next/head'
import SignInComponent from '../components/SignInComponent'


export default function signIn  () {
  return (
    
    <div className='bg-black opacity-[0.8]'>
      <Head>
        <title>SignIn</title>
      </Head>

      <SignInComponent/>

      </div>
  )
}
