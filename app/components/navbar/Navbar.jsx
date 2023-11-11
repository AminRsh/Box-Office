'use client'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from "react-icons/gr"
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'

function Navbar() {

    const [menu, setMenu] = useState(false);
    const showMenu = () => {
        setMenu(!menu)
    }

    return (

        <div className="">
            <nav className="mt-0 py-6 bg-black sticky top-0 sm:max-md:hidden">
                <div className="container mx-auto px-12 text-[#fff]">
                    <ul className="flex justify-center ">
                        <li className="mr-10 text-lg"><Link href="/" legacyBehavior><a
                            className="hover:text-[crimson] inline-block text-[#fff] mx-0 relative transition-colors delay-[100ms] ease-in-out hover:text-bg-[#ff1414]"
                        >Home</a></Link></li>
                        <li className="mr-10 text-lg"><Link href="/popular" legacyBehavior><a
                            className="hover:text-[crimson] inline-block text-[#fff] mx-0 relative transition-colors delay-[100ms] ease-in-out hover:text-bg-[#ff1414]"
                        >Top 16</a></Link></li>
                        <li className="mr-10 text-lg"><Link href="/tv" legacyBehavior><a
                            className="hover:text-[crimson] inline-block text-[#fff] mx-0 relative transition-colors delay-[100ms] ease-in-out hover:text-bg-[#ff1414]"
                        >TV Series</a></Link></li>
                        <li className="mr-10 text-lg"><Link href="/stars" legacyBehavior><a
                            className="hover:text-[crimson] inline-block text-[#fff] mx-0 relative transition-colors delay-[100ms] ease-in-out hover:text-bg-[#ff1414]"
                        >Stars</a></Link></li>
                        <li className="mr-10 text-lg"><Link href="/airing" legacyBehavior><a
                            className="hover:text-[crimson] inline-block text-[#fff] mx-0 relative transition-colors delay-[100ms] ease-in-out hover:text-bg-[#ff1414]"
                        >Airing Today</a></Link></li>
                    </ul>
                </div>
            </nav>

            <div className="md:hidden">

                <button onClick={showMenu}><GiHamburgerMenu size="25px" className="ml-[35%] mt-[40%] text-[25px] sm:max-md:text-[15px]" 
                color="rgb(253 224 71)" /></button>
                <div className={menu ? "fixed inset-0 bg-white/60 backdrop-blur-xl z-50" : "hidden"}>
                    <button className="absolute top-6 right-6" onClick={showMenu}><GrClose size="18px" /></button>
                    <div className="mt-[8%] px-[45%]">
                        <div className="flex">
                            <a className="pr-5 opacity-50 hover:opacity-100"  href="https://www.facebook.com/"><FaFacebook size="36px" color="blue" /></a>
                            <a className="opacity-50 hover:opacity-100" href="https://www.instagram.com/" target='_blank'><FaInstagram size="40px" color="red" /></a>
                        </div>
                    </div>
                    <nav className="mt-1">
                        <ul className={"flex flex-col items-start align-bottom text-2xl text-white justify-center p-8 gap-8"}>
                            <li>
                                <Link onClick={showMenu} href="/" className="px-8 hover:text-slate-600 cursor-pointer">Home</Link>
                            </li>
                            <li>
                                <Link onClick={showMenu} href="/popular" className="px-8 hover:text-slate-600 cursor-pointer">Top 16</Link>
                            </li>
                            <li>
                                <Link onClick={showMenu} href="/tv" className="px-8 hover:text-slate-600 cursor-pointer">Tv Series</Link>
                            </li>
                            <li>
                                <Link onClick={showMenu} href="/stars" className="px-8 hover:text-slate-600 cursor-pointer">Stars</Link>
                            </li>
                            <li>
                                <Link onClick={showMenu} href="/airing" className="px-8 hover:text-slate-600 cursor-pointer">Airing Today</Link>
                            </li>
                        </ul>
                    </nav>
                </div>

            </div>
        </div>



    )
}


export default Navbar