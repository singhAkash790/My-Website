import React from 'react'
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
// import { ImMenu } from "react-icons/im";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Link from "next/link";



function main() {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto flex p-2 justify-center  items-center'>
            <div>
                <p className='uppercase text-sm  tracking-widest text-gray-600 font-serif '>let&rsquo;s build something together</p>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-Raleway text-gray-600 py-4'>hi,i&rsquo;m <span className='text-blue-500'> Akash</span></h1>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-Raleway text-gray-600 py-2 uppercase'>A FullStack WEB DEVELOPER </h1>
                <p className='py-4 text-gray-600 px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium veniam sunt nemo tempore ex? Saepe eum natus cupiditate cumque ea dolorum aliquam tempore nulla? Blanditiis vitae in nobis, impedit maiores qui maxime quaerat eum dolorum eaque cupiditate fuga! A exercitationem eos eius ipsa. Sed, consequatur doloribus nostrum perspiciatis minima, excepturi magni nam voluptates vel totam commodi officia blanditiis recusandae eligendi corrupti veritatis sequi provident dicta. Quam in ex eveniet labore eum doloribus vel quo omnis!</p>
                <div className='pt-20 max-w-[50%] m-auto flex justify-between items-center '>
                <a
                  href='https://www.linkedin.com/in/akashchitthodiya790/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-500  hover:text-black hover:bg-[#0077b5]'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/singhAkash790'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-500  hover:bg-black hover:text-white'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-500 hover:bg-[#81E1AF] hover:text-black'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-out duration-500 hover:bg-[#94B49F] hover:text-black'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
        </div>

    </div>
  )
}

export default main