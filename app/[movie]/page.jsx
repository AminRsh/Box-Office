import Image from "next/image";
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Great_Vibes } from "next/font/google"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faHeart } from "@fortawesome/free-solid-svg-icons";


const greatvibes = Great_Vibes({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-greatvibes",
})

export async function generateStaticParams() {
  try {
      const data = await fetch(`https://api.example.com/movies`); // Replace with your actual API endpoint
      const res = await data.json();

      // Check if res.results is defined and is an array
      if (res && res.results && Array.isArray(res.results)) {
          return res.results.map((movie) => (
              { movie: String(movie.id) }
          ));
      } else {
          // Handle the case where res.results is undefined or not an array
          console.error("Results is undefined or not an array:", res.results);
          return [];
      }
  } catch (error) {
      console.error("Error in generateStaticParams:", error);
      return [];
  }
}


async function MoveDetail({ params }) {

  const { movie } = params
  const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, { next: { revalidate: 60 } });
  const res = await data.json();
  // console.log(res)
  const array = res.production_companies.length
  // console.log(res.genres)
  // console.log(array)
  return (
    <div className="container mx-auto px-20">
      <a href={res.homepage} className="" target="_blank"><h1 className="text-slate-50 text-2xl mb-8 hover:text-sky-700 inline-block">{res.title}</h1></a>
      <h2 className=" text-orange-300 text-xl mb-4">Overview:</h2>
      <p className="text-slate-50 text-md">{res.overview}</p>

      <div className="w-3/4 mx-auto my-8">

        <span className="font-bold text-slate-50 text-2xlg mr-6">Release Date :</span><span className="text-red-600 font-bold text-2xlg">{res.release_date}</span>
        <hr className="my-4 opacity-25" />
        <span className="font-bold text-slate-50 text-2xlg mr-6">Budget :</span><span className="text-red-600 font-bold text-2xlg">
          {res.budget} $</span>
        <hr className="my-4 opacity-25" />
        <span className="font-bold text-slate-50 text-2xlg mr-6">Gener :</span>
        {
          res.genres.map(gener =>
            <span className="text-red-600 font-bold text-2xlg" key={gener.id}>
              &nbsp;{gener.name},
            </span>
          )
        }

        <hr className="my-4 opacity-25" />
        <span className="font-bold text-slate-50 text-2xlg mr-6">Release Date :</span><span className="text-red-600 font-bold text-2xlg">{res.release_date}</span>
        <hr className="my-4 opacity-25" />
        <span className="font-bold text-slate-50 text-2xlg mr-6">Revenue :</span><span className="text-red-600 font-bold text-2xlg">
          {res.revenue} $</span>
        <hr className="my-4 opacity-25" />
        <span className="font-bold text-slate-50 text-2xlg mr-6">Run Time :</span><span className="text-red-600 font-bold text-2xlg">
          {res.runtime} min</span>
        <hr className="my-4 opacity-25" />
        <span className="font-bold text-slate-50 text-2xlg mr-6">Status :</span><span className="text-red-600 font-bold text-2xlg">
          {res.status}</span>
        <hr className="my-4 opacity-25" />
        <span className="font-bold text-slate-50 text-2xlg mr-6">Production Countries :</span>
        {
          res.production_countries.map((country, index) =>
            <span className="text-red-600 font-bold text-2xlg" key={index}>
              &nbsp;{country.name},
            </span>
          )
        }
      </div>

      <h2 className={`${greatvibes.className} text-center text-[45px] p-0 mt-20 text-[#eff0f1]`}>{res.tagline}</h2>
      <a href={res.homepage} target="_blank">
        <Image
          alt={res.title}
          src={'https://image.tmdb.org/t/p/original' + res.backdrop_path}
          className="w-3/4 mx-auto my-12 border-2 border-rose-400 rounded-lg opacity-80 hover:border-rose-800 hover:opacity-100"
          width={1000}
          height={1000}
          priority
        />
      </a>

      <div className="w-1/2 h-[50px] mx-auto rounded-xl flex justify-around items-center bg-slate-50">
        <div>
          <span className="pr-4">Vote Count: {res.vote_count}</span>
          <FontAwesomeIcon icon={faBox} fade size="2xl" />
        </div>
        <div>
          <span className="pr-4">Rate: {res.vote_average}</span>
          <FontAwesomeIcon icon={faHeart} beat size="2xl" style={{ color: "#f50f0f", }} />
        </div>
      </div>

      <h2 className="text-yellow-400 text-xl text-center mt-20">Produced By:</h2>
      <div style={array > 3 ? {width: '85%'} : {width : '50%'} } className=" bg-slate-200 mx-auto my-12 mt-8 mb-20 py-4 px-6 
      flex items-center justify-evenly rounded-lg">
        {
          res.production_companies.map(company =>
            company.logo_path ?
              (<div className="" key={company.id}>
                <Image
                  src={'https://image.tmdb.org/t/p/original' + company.logo_path}
                  alt={company.name}
                  width={70}
                  height={80}
                  data-tooltip-target="tooltip-company"
                  className="cursor-pointer"
                />
              </div>)
              : (
                <h2 className="text-sm font-['montserrat'] font-bold italic">{company.name}</h2>
              )
          )
        }
      </div>
    </div>
  )
}

export default MoveDetail