"use client"
import Link from 'next/link'
import Image from 'next/image'
import style from '../popular/Movie.module.css'
import Modal from '../components/Modal'
import { Fragment, useState } from 'react'

function Star({ id, name, popularity, profile_path, gender, known_for }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Fragment>
      <div className={style.container}>
        <figure className={style.fig}>
          <a onClick={() => setShowModal(true)} className="cursor-pointer">
            {<Image
              src={'https://image.tmdb.org/t/p/original' + profile_path}
              width={800}
              height={800}
              alt={name}
              className={style.images}
              priority
            />}
          </a>
        </figure>
        <h2 className={style.info}>{name}</h2>

      </div>
      <Modal
        isvisible={showModal}
        onClose={() => setShowModal(false)}
      >
        <p className="text-lg text-black font-bold pb-2"><span className="text-red-600 text-lg font-bold">Name: </span>{name}</p>
        <p className="text-lg text-black font-bold pb-2"><span className="text-red-600 text-lg font-bold">Popularity: </span>{popularity}</p>
        <p className="text-red-600 text-lg font-bold">Gender:
          {
            (gender === 2)
              ? <span className="text-lg text-black font-bold"> Male</span>
              : <span className="text-lg text-black font-bold"> Female</span>
          }
        </p>

        <h2 className="text-center text-red-600">Best Movies</h2>
        <div className="flex justify-center items-center mt-6 border-2 py-2 pl-2 rounded-lg border-black">

          {
            known_for.map(item =>
              <div key={item.id} className="pr-2 hover:opacity-80 cursor-pointer">
                <Link href={`/${item.id}`}>
                  <Image
                    src={'https://image.tmdb.org/t/p/original' + item.poster_path}
                    width={200}
                    height={300}
                    alt={item.title}
                    priority
                  />
                </Link>
              </div>
            )
          }
        </div>

      </Modal>

    </Fragment>
  )
}

export default Star