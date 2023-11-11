import Airing from './Airing'

async function Airings () {
    const data = await fetch(`https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.API_KEY}`);
    const res = await data.json();
    // console.log(res)

    return (
        <div className="mt-20 grid gap-10 grid-cols-fluid px-8">
            {
                res.results.map(airing =>
                    <Airing
                        key={airing.id}
                        id={airing.id}
                        name={airing.name}
                        overview={airing.overview}
                        popularity={airing.popularity}
                        first_air_date={airing.first_air_date}
                        vote_average={airing.vote_average}
                        origin_country={airing.origin_country}
                        backdrop_path={airing.backdrop_path}
                        poster_path={airing.poster_path}
                    />
            )}
        </div>
    )
}

export default Airings 