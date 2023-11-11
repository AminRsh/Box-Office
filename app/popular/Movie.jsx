import Link from 'next/link'
import Image from 'next/image'
import style from './Movie.module.css'

function Movie({ title, id, poster_path, release_date }) {
  return (
    <div className={style.container}>
      <figure className={style.fig}> 
        <Link href={`/${id}`} >
        {<Image
          src={'https://image.tmdb.org/t/p/original' + poster_path}
          width={800}
          height={800}
          alt={title} 
          className={style.images}
          />}
        </Link>
      </figure>
      <h2 className={style.info}>{title}<br/>{release_date}</h2>
    </div>
  )
}

export default Movie