import React, { useState } from 'react'
import { SliderData } from './SliderData'
import Image from 'next/image'
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa'
import react from 'react'
// Logic for the slider 

const Slider = ({slides}) => {

  const [current, setCurrent] = useState(0)
  const length  = slides.length;

  const nextSlide= ()=>{
    setCurrent(current === length - 1?0:current+1)
  }
  const prevSlide= ()=>{
    setCurrent(current === 0 ? length-1 : current-1)
  }

  if (!Array.isArray(slides)||slides.length<=0){
    return null;
  }
  return (
    <div id ='about' className='max-w-[1240px] mx-auto'>
      <h1 className='text-4xl font bold text-center p-4'>About</h1>
      <div className='relative flex justify-center p-4 m-0'>

      {/* map all the available slides in SliderData and return it as a prop here  */}
        {SliderData.map((slide,index) =>{
        return (
          // Hide other images if next image isnt initiated
        <div key={index} className={index === current? 'opacity-[1] ease-in duration-1000':'opacity-0'}>

           {/* add buttons for user to scroll images with */}
         <FaArrowCircleLeft onClick={nextSlide} className ='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]' size = '50'/>
        
        {index === current &&(
         <Image src={slide.Image} 
         alt='/' 
         width='1920'
         height='1080'/>
        )}
       <FaArrowCircleRight onClick={prevSlide} className ='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]' size = '50'/>
        </div>
      
      ); 
      })}
    </div>
    {/* about infomation  */}
    <div className='m-1 justify-items-center'>
      <h1 className='text-2md'> we aim to make banking easy and straight forward.
        <p/>We help maintaining your monthly spend and keep more money on your pocket. 
        <p/>We inted to take a brute force approach by assist you with inteli-sense to help gauge your monthly spend in a way that you take control of how much you spend every month, and in return to following our proffesional inteli-sense customers will be rewarded with monthly cash-backs that can be spent in big retails stores such as Tesco, ASDA, Primark, Game, Starbucks etc 
      </h1>
      <p>
      </p>
    </div>
    </div>
      
  )
}

export default Slider