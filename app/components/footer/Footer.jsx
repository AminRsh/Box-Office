import { FaTiktok } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { AiOutlineInstagram, AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'
import footer from "./Footer.module.css"
import Image from 'next/image'
import Icon from '../../../public/assets/icon.svg'

function Footer() {

    return (

        <div className="bg-black w-full pb-1">
            <hr className="w-full h-[1px] bg-[#C0C0C0] opacity-30" />
            <div className="flex justify-center items-center mx-auto px-20 py-8">
                <div className="cursor-pointer mr-10">
                    <Link href="https://www.tiktok.com" target='_blank'><FaTiktok size='28px' className={footer.tiktok} /></Link>
                </div>
                <div className="cursor-pointer mr-10">
                    <Link href="https://www.instagram.com" target='_blank'><AiOutlineInstagram size='30px' className={footer.instagram} /></Link>
                </div>
                <div className="cursor-pointer mr-10">
                    <Link href="https://twitter.com" target='_blank'><AiOutlineTwitter size='30px' className={footer.twiter} /></Link>
                </div>
                <div className="cursor-pointer mr-10" target='_blank'>
                    <Link href="https://www.youtube.com"><AiFillYoutube size='30px' className={footer.youtube} /></Link>
                </div>
                <div className="cursor-pointer mr-10" target='_blank'>
                    <Link href="https://www.facebook.com"><BsFacebook size='28px' className={footer.facebook} /></Link>
                </div>
            </div>
            <div className=" mx-auto px-[180px] grid grid-cols-4 gap-8 mb-8 sm:max-xl:px-0 sm:max-xl:grid-cols-3 sm:max-mdi:grid-cols-2">
                <div className="flex justify-center items-center sm:max-xl:hidden">
                    <Link href='/' target='_blank' >
                        <Image
                            src={Icon}
                            width={100}
                            height={80}
                            alt='brand'
                            className="object-cover hover:opacity-60 hover:transition-opacity delay-[250ms] ease-in-out"
                        />
                    </Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-slate-50 mb-4 hover:text-yellow-500">Cinema & Tv</h2>
                    <Link href="/poular" className="text-red-400 text-sm hover:text-red-600">Movies</Link>
                    <Link href="/tv" className="text-red-400 text-sm hover:text-red-600">Series</Link>
                    <Link href="/stars" className="text-red-400 text-sm hover:text-red-600">Stars</Link>
                    <Link href="/airing" className="text-red-400 text-sm hover:text-red-600">Airing</Link>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-slate-50 mb-4 hover:text-yellow-500">Live Tv Channels</h2>
                    <a href="https://www.hbo.com/" className="text-red-400 text-sm hover:text-red-600 text">HBO</a>
                    <a href="https://www.fox.com/" className="text-red-400 text-sm hover:text-red-600">FOX</a>
                    <a href="https://www.cbs.com/" className="text-red-400 text-sm hover:text-red-600">CBS</a>
                    <a href="https://www.discovery.com/" className="text-red-400 text-sm hover:text-red-600">Discovery</a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-slate-50 mb-4 hover:text-yellow-500">Others</h2>
                    <Link href="/" className="text-red-400 text-sm hover:text-red-600">Terms of Use</Link>
                    <Link href="/" className="text-red-400 text-sm hover:text-red-600">Disclaimer</Link>
                    <Link href="/" className="text-red-400 text-sm hover:text-red-600">Privacy & Policy</Link>
                    <Link href="/" className="text-red-400 text-sm hover:text-red-600">Contact Us</Link>
                </div>
                
            </div>
            <hr className="w-full h-[1px] bg-[#C0C0C0] opacity-30 " />

            <div className="text-center">
                <span className="text-slate-50 text-sm mt-2">
                    &#169; 2023 by <a className="text-red-600 hover:text-yellow-500">MARSharifi</a>. All Rights Reserved.
                </span>
            </div>

        </div>
    )
}

export default Footer