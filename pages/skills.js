import React, { useState } from 'react'
import Image from "next/image";

// const name=(html,css,react,mongodb)=>{
// [name,setname]=useState
// }; 
const Skills = () => {
  return (
    <div id='skills' className='w-ull lg:h-screen p-2 py-16'>
     <div className='max-w-[1240px] mx-auto flex flex-col py-16'>
         <p className='text-xl tracking-widest uppercase text-teal-500 font-bold'>
                Skills
         </p>
         <h2 className='py-4'> what I can do </h2>
         <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        
        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/html.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            HTML
        </div>
        

        </div>

        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/css.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            CSS
        </div>
        

        </div>

        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/tailwind.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            Tailwind
        </div>
        

        </div>

        </div>        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/javascript.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            JavaScript
        </div>
        

        </div>

        </div>        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/react.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            React.Js
        </div>
        

        </div>

        </div>    
            <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/nextjs.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            Next.js
        </div>
        

        </div>
        

        </div>
        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/node.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            Node.js
        </div>
        

        </div>

        </div>        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/firebase.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            FireBase
        </div>
        

        </div>

        </div>        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/mongo.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            MongoDB
        </div>
        

        </div>

        </div>        <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/github1.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            GitHub
        </div>
        

        </div>

        </div>
        {/* <div className='p-6 shadow-xl rounded-xl hover:scale-110 ease-in duration-500'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src='/../public/aws.png' alt='/' width='64' height='64'/>
            </div>
        <div className='flex flex-col items-center justify-center'>
            AWS
        </div> */}
        
            {/* making it by using props */}
        {/* </div> */}

        {/* </div> */}
            
         </div>
     </div>
    </div>
  )
}

export default Skills;