import Tv from './Tv'

async function Tvs() {
    const data = await fetch(`https://api.themoviedb.org/3/trending/tv/day?api_key=${process.env.API_KEY}`);
    const res = await data.json();

    return (
        <div className="mt-20 grid gap-10 grid-cols-fluid px-8">
            {
                res.results.map(tv =>
                    <Tv
                        key={tv.id}
                        id={tv.id}
                        name={tv.name}
                        overview={tv.overview}
                        popularity={tv.popularity}
                        first_air_date={tv.first_air_date}
                        vote_average={tv.vote_average}
                        origin_country={tv.origin_country}
                        backdrop_path={tv.backdrop_path}
                        poster_path={tv.poster_path}
                    />
            )}
        </div>
    )
}

export default Tvs