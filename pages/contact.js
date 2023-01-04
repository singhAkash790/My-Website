import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
const contact = () => {
  return (
    <>
      <div id="contact" className="w-max h-screen p-2 py-16 px-16">
        <div className="max-w-[1240px] w-max  px-20 m-auto">
          <p className="uppercase text-widest text-slate-800 text-xl  font-bold">
            contact
          </p>
          <h1 className="py-4 text-3xl">Get In Touch</h1>
          <div className="  py-8 w-max  grid lg:grid-cols-2 gap-8">
            <div className=" shadow-lg rounded-xl p-3 shadow-stone-500 ">
              <Image
                className="shadow-slate-500 shadow-lg rounded-xl"
                alt=""
                src="/../public/about.jpg"
                width="200"
                height="90"
              />
              <h1 className="text-widest py-3 text-2xl">Akash Singh</h1>
              <p className="py-1 text-slate-600">Full Stack Web Developer</p>
              <p className="text-sm">
                I am aviable for freelancing or full-time position
              </p>
              <p className="text-sm">Contact me and let&apos;s talk</p>
              <p className="uppercase pt-20 pb-2 text-widest ">
                connect with me
              </p>
              <div className=" max-w-[75%] p-1 m-auto flex justify-between items-center ">
                <a
                  href="www.linkedin.com/in/akash-singh-1b25a7208/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/fireclint"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
            <div className=" gap-5 shadow-xl h-auto w-full rounded-xl shadow-gray-500 lg:p-4">
              <div className="p-4">
                <form action="">
                  <div className="grid md:grid-cols-2 gap-2 w-full py-2">
                    <div className="flex flex-col  ">
                      <label className="uppercase text-sm py-2"> name </label>
                      <input
                        className="border-2 rounded-lg flex border-gray-400"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col ">
                      <label className="uppercase text-sm py-2">
                        {" "}
                        Phone Number
                      </label>
                      <input
                        className="border-2 rounded-lg flex border-gray-400"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2 ">
                    <label className="uppercase text-sm py-2"> E-mail</label>
                    <input
                      className="border-2 rounded-lg flex border-gray-400 "
                      type="email"
                    />
                  </div>
                  <div className="flex flex-col py-2 ">
                    <label className="uppercase text-sm py-2"> subject</label>
                    <input
                      className="border-2 rounded-lg flex border-gray-400 "
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col py-2 ">
                    <label className="uppercase text-sm py-2"> message</label>
                    <textarea
                      className="rounded-lg border-gray-500 border-2"
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 text-gray-100 mt-4 bg-gradient-to-r from-slate-900 ,to-slate-400 '  rounded-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="flex justify-center py-12">
            <Link href="/">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <HiOutlineChevronDoubleUp
                  className="text-[#5651e5]"
                  size={30}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
