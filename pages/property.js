import Image from 'next/image';
import React from 'react'
import propertyImg from '../public/property.jpg';


const property = () => {
  return (
    <div className=' w-full '>
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-screen h-[30vh] lg:h-[40vh]  bg-black/70 z-10"></div>
        <Image className='absolute z-1 lg:w-screen  ' layout='fill' objectFit='cover' src ={propertyImg}/>
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2' >
          <h2>Weather condition Finder</h2>
          <h3>React JS / Css / API</h3>
        </div>
      </div>       
    </div>
  )
}

export default property;