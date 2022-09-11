import React, {useEffect, useState} from 'react'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'


// nav bar design pattern

const Nav_Bar = () => {
  const [nav, setNav] = useState(false);
  const [colour, setColour] = useState('transparent');
  const [textColour, setTextColour] = useState('white');

  useEffect(() => {
    const changeColour = () =>{
      if (window.scrollY >= 90){
        setColour('#fdf3ea')
        setTextColour('#000000')
      }else{
        setColour('transparent')
        setTextColour('#ffffff')

      }
    };
    window.addEventListener('scroll',changeColour);
    }, []);

    
  return (
    <div style ={{backgroundColor :`${colour}`}} className='fixed left-0 top-0 w-full z-10 ease-in duration-300'>
      <div className='max-w-[1240px] flex justify-between items-center p-4 text-white'>

        {/* Logo */}
        <Link href='/'>
        <h1 style ={{color :`${textColour}`}} className='font-bold text-5xl cursor-pointer'>
          SavR
        </h1>
        </Link>

        {/* Navbar Links  */}
        <ul style ={{color :`${textColour}`}} className= 'hidden sm:flex'>
          <li  className='p-4' > 
            <Link href ='/'>Home</Link>
          </li> 
          <li  className='p-4' > 
            <Link href ='/#about'>About</Link>
          </li> 
          <li className='p-4'> 
            <Link href ='/portfolio'>Testimonials</Link>
          </li> 
          <li className='p-4' > 
            <Link href ='/contact'>Contact</Link>
          </li> 
        </ul>

        {/* mobile buttons for mobil compatibility */}
        <div onClick ={() => setNav(!nav)} className='block sm:hidden z-10'>
          {nav ? <AiOutlineClose size={25} style ={{color :`${textColour}`}} />: <AiOutlineMenu size={25} style ={{color :`${textColour}`}} />}
        </div>

        {/* mobile menu */}
        <div className={nav 
          ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black    text-center ease-in-out duration-300 opacity-[0.9]'
          : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in-out duration-300 opacity-[0.9]'}
        >
        <ul>
          {/* mobile version of nav bar */}
          <li className='p-4 text-4xl hover:text-gray-500'> 
            <Link href ='/'>Home</Link>
          </li> 
          <li className='p-4 text-4xl hover:text-gray-500'> 
            <Link href ='/#about'>About</Link>
          </li> 
          <li className='p-4 text-4xl hover:text-gray-500'> 
            <Link href ='/portfolio'>Testimonials</Link>
          </li> 
          <li className='p-4 text-4xl hover:text-gray-500'> 
            <Link href ='/contact'>Contact</Link>
          </li> 
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Nav_Bar