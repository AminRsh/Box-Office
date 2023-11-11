import Movie from './Movie'

async function Popular() {

    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const type = typeof(data)
    console.log(type)
    const res = await data.json();


    return (

        <div className="mt-20 grid gap-10 grid-cols-fluid mx-10">
            {res.results.map(movie =>
                <Movie
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                />
            )}
        </div>
    )

}

export default Popular