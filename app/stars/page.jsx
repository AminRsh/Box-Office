
import Star from './Star';

async function Stars() {
    const data = await fetch(`https://api.themoviedb.org/3/trending/person/week?api_key=${process.env.API_KEY}`);
    const res = await data.json();

    return (
        <div className="mt-20 grid gap-10 grid-cols-fluid px-16">
            {
                res.results.map(star =>
                    <Star 
                        key={star.id}
                        id={star.id}
                        name={star.name}
                        popularity={star.popularity}
                        gender={star.gender}
                        profile_path={star.profile_path}
                        known_for={star.known_for}
                    />
                )
            }
        </div>
    )
}

export default Stars