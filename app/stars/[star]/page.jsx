import Image from "next/image";

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.API_KEY}`);
    const res = await data.json();
    return res.results.map((star) => (
        { star : toString(star.id) }
    ))
}

async function StarDetail ({params}) {
    const { star } = params;
    const data = await fetch(`https://api.themoviedb.org/3/person/${star}?api_key=${process.env.API_KEY}`, { next: { revalidate: 60 } });
    const res = await data.json();
    // console.log(res)
    return (
        <div className=" text-slate-50 ">
            {/* <span>{res.also_known_as[0]}</span> */}
            <span>{res.biography}</span>
            <span>{res.birthday}</span>
            <span>{res.deathday}</span>
            <span>{res.name}</span>
            <span>{res.place_of_birth}</span>
            <span>{res.popularity}</span>
            <Image 
                src={'https://image.tmdb.org/t/p/original' + res.profile_path}
                width={800}
                height={800}
            />

        </div>
    )
}

export default StarDetail