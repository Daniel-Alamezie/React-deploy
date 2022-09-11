import React from 'react'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import SignUpComponent from '../components/SignUpComponent'

export default function signUp() {
  return (
    <div className='bg-black opacity-[0.8]'>
       <Head>
        <title>SignUp</title>
      </Head>
      <SignUpComponent/>

    </div>

  )
}