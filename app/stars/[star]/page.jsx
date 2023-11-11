import Image from "next/image";

export async function generateStaticParams() {
    const data = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.API_KEY}`);
    const res = await data.json();

    // Check if the response is an array
    if (Array.isArray(res)) {
        return res.map((star) => (
            { star: String(star.id) }
        ));
    } else {
        // Handle the case where res is not an array
        console.error("Response is not an array:", res);
        return [];
    }
}


async function StarDetail({ params }) {
    const { star } = params;
    const data = await fetch(`https://api.themoviedb.org/3/person/${star}?api_key=${process.env.API_KEY}`, { next: { revalidate: 60 } });
    const res = await data.json();

    return (
        <div className="text-slate-50">
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
    );
}

export default StarDetail;
