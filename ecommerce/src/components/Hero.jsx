import React from 'react'
import hero from '../assets/hero.jpg'
export const Hero = () => {
  return (
    <div className='p-3 bg-linear-to-b  mx-auto rounded-md grid grid-rows-2 justify-center items-center  '>
        <div className='mt-5'>
        <img src={hero} alt="" className='rounded-md border-4' />
        </div>
        <div className='text-center  p-5  mt-5 '>
            <h3 className='text-[1.4rem]  font-extrabold '>Welcome to My Website</h3>
            <p className='font-sans uppercase mt-5 m-2 font-light text-[13px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio veniam repellat cum ipsum amet, porro impedit accusantium iure debitis maiores nulla nesciunt temporibus in possimus soluta, aperiam, quis veritatis illum.</p>
        </div>
    </div>
  )
}
