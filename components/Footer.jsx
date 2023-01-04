import React from 'react';
import Link from 'next/link';
import footerBg from '../public/footerBg.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <>
            <div className=" flex  justify-center items-center text-white z-0 bg-black/70 backdrop-blur-md border-t-2 border-black">
                {/* <Image src={footerBg} alt="/" className=" relative " />  */}
                <div className="  inset-0 flex justify-center items-center z-10 m-20">
                    <div className="flex flex-col ">
                        <div className="flex flex-row gap-8  justify-center">
                            <Link href="https://www.linkedin.com/in/akashchitthodiya790/">
                                <p
                                    //  onClick={() => setNav(false)}
                                    className="py-4 hover:scale-110  "
                                >
                                    LinkedIn
                                </p>
                            </Link>

                            <Link href="https://github.com/singhAkash790">
                                <p
                                    //  onClick={() => setNav(false)}
                                    className="py-4 hover:scale-110  "
                                >
                                    GitHub
                                </p>
                            </Link>
                            <Link href="/#home">
                                <p
                                    //  onClick={() => setNav(false)}
                                    className="py-4 hover:scale-110  "
                                >
                                    Contact
                                </p>
                            </Link>
                            <Link href="/#home">
                                <p
                                    //  onClick={() => setNav(false)}
                                    className="py-4 hover:scale-110  "
                                >
                                   Mail
                                </p>
                            </Link>
                            <Link href="/#home">
                                <p
                                    //  onClick={() => setNav(false)}
                                    className="py-4 hover:scale-110  "
                                >
                                    Instagram
                                </p>
                            </Link>
                        </div>
                        <div className="flex justify-center ">
                            <hr className=" w-full p-0 border-t-2 border-black "/>
                        </div>
                        <div className="flex justify-center pt-6 font-Work">
                            feel free to contact anytime, anywhere
                        </div>
                        <div className="flex justify-center pt-6 font-Work">
                            Akashchitthodiya@gmail.com
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
