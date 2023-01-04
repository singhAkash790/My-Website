import React ,{useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { ImMenu } from "react-icons/im";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Navbar = () => {
  const [nav,setNav]= useState(false)
   
  const handleNav= ()=>{
    setNav(!nav);   
  }
  return (
    <>
      <div>
        <div classname="  w-full h-20 shadow-2xl shadow-black z-[100] m2  ">
          <div className="flex justify-between items-center shadow-2xl border-b-2 border-black w-full h-full px-2 2xl:px-16 bg-slate-600">
            <Image className="rounded-full bg-blend-normal m-2 shadow-sm shadow-black "
              src="/../public/logo pic.jpg"
              alt="/"
              width="100"
              height="50"
            />
            <div className="flex items-center">
              <div className="justify-start flex items-center  gap-6 ">
              <ul className=" gap-6 hidden md:flex text-white ">
                <Link href="/">
                  <li className="ml-10 text-sm uppercase hover:border-b ">
                    Home
                  </li>
                </Link>
                <Link href="/about">
                  <li className="ml-10 text-sm uppercase hover:border-b ">
                    about
                  </li>
                </Link>
                <Link href="/skills">
                  <li className="ml-10 text-sm uppercase hover:border-b ">
                    skills
                  </li>
                </Link>
                <Link href="/projects">
                  <li className="ml-10 text-sm uppercase hover:border-b ">
                    projects
                  </li>
                </Link>
                <Link href="/contact">
                  <li className="ml-10 text-sm uppercase hover:border-b ">
                    contacts
                  </li>
                </Link>
              </ul>
              <div onClick={handleNav} className="">
                <ImMenu size={25} className='text-white/80' />
              </div>
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
      <div
        className={nav?' fixed left-0 top-0 w-full h-screen bg-black/70 ease-in-out duration-700':" ease-in-out duration-700"}
      >
        {/* Side Drawer Menu */}
        <div
          className={nav?'fixed left-0 top-0 w-[30%] sm:w-[60%] md:w-[30%] h-screen bg-white/10  backdrop-blur-md  p-5 ease-in duration-500':'fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-slate-400 p-5 ease-in duration-1000'
                    }
        >
          <div >
            <div className="cursor=pointer flex w-full items-center justify-between text-white top-0 mt-0 pt-0">
              <Link href="/home">
                <Image  className="rounded-full p-2 shadow-1"
                  src="/../public/logo pic.jpg"
                  width="87"
                  height="40"
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-out duration-500 hover:bg-[#EB4747] hover:text-black "
              >
                <AiOutlineClose className='text-white  '/>
              </div>
            </div>
            <div className="border-b border-slate-600 my-4">
              <p className="w-[85%] md:w-[90%] py-4 text-white" >
                Let&#39;s build something legendary together
              </p>
            </div>

            <div className="py-4 ">
              <ul className="uppercase text-center text-white">
                <Link href="/#home">
                  <li onClick={() => setNav(false)} className="py-4 text-sm hover:scale-110 ">
                    Home
                  </li>
                </Link>
                <Link href="/#about">
                  <li onClick={() => setNav(false)} className="py-4 text-sm hover:scale-110">
                    About
                  </li>
                </Link>
                <Link href="/#skills">
                  <li onClick={() => setNav(false)} className="py-4 text-sm hover:scale-110">
                    Skills
                  </li>
                </Link>
                <Link href="/#projects">
                  <li onClick={() => setNav(false)} className="py-4 text-sm hover:scale-110">
                    Projects
                  </li>
                </Link>
                <Link href="/resume">
                  <li onClick={() => setNav(false)} className="py-4 text-sm hover:scale-110">
                    Resume
                  </li>
                </Link>
                <Link href="/#contact">
                  <li onClick={() => setNav(false)} className="py-4 text-sm hover:scale-110 ">
                    Contact
                  </li>
                </Link>
              </ul>
              <div className=' text-white'>
              <p className='uppercase tracking-widest text-[#6C95EC ]'>
                Let&#39;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/akashchitthodiya790/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-out duration-500  hover:text-black hover:bg-[#0077b5] hover:outline-[#0077b5]'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/singhAkash790'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-out duration-500 hover:bg-black'>
                    <FaGithub />
                  </div>
                </a>
                <Link href='/#contact'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-out duration-500 hover:bg-[#81E1AF] hover:text-black'
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href='/resume'>
                  <div
                    onClick={() => setNav(!nav)}
                    className='rounded-full shadow-lg shadow-black p-3 cursor-pointer hover:scale-105 ease-out duration-500 hover:bg-[#F7DBF0] hover:text-black'
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
