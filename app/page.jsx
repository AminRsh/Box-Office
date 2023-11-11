import { Great_Vibes } from "next/font/google"
import Link from 'next/link'
// import Carousel from './components/carousel/Carousel'
//https://www.disneyplus.com/movies/peter-pan-wendy/147B2rQASB09

const greatvibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-greatvibes",
})

function Home() {


  return (

    <div className="relative bg-home_image h-screen bg-cover from-transparent" >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.99))`
        }}
      >
        <article className="container mt-20 px-16 flex flex-col pb-[112px] relative sm:max-md:px-0 sm:max-md:w-full sm:max-md:mx-auto sm:max-md:pb-[20px]">
          <div className="items-end flex-col justify-start mx-0 my-auto min-h-[170px] pt-[56px] 
              pb-[16px] transition-opacity delay-[200ms] w-full text-yellow-300">
            <span className= "font-greatvibes text-[30px] ml-[15%] sm:max-md:text-[35px] sm:max-md:ml-[45%]">Amin</span>
            <p className= "font-greatvibes text-[55px] sm:max-md:text-[45px] sm:max-md:text-center">Movie & Series Center</p>
          </div>
          <div className="text-slate-50 text-sm sm:max-md:text-center sm:max-md:text-base">
            <p >MARSH helps you select the perfect next show or movie to watch.</p>
          </div>
          <div className="flex mt-10  sm:max-md:mt-[160px] ">
            <Link className="bg-blue-600 text-slate-300 hover:text-slate-50 px-8 py-3 mr-8 rounded-lg font-bold  hover:bg-blue-800
              sm:max-md:mb-12 sm:max-md:mx-auto sm:max-md:mr-2`" href={'/popular'}
            >Get Started</Link>

            <Link href='https://www.disneyplus.com/video/4999b17b-6fc0-4258-b8e2-8990667f452f' target='_blank'
              className="bg-black text-slate-300 outline outline-1 outline-slate-300 px-8 py-3 
              rounded-lg hover:outline-slate-50 hover:bg-blue-800 sm:max-md:mr-4 sm:max-md:max-h-[48px]"
            >Trailer</Link>
          </div>
        </article>
      </div>
    </div>

  )
}

export default Home
