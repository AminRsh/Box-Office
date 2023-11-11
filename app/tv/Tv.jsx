"use client"
import Link from 'next/link'
import Image from 'next/image'
import style from '../popular/Movie.module.css'
import Modal from '../components/Modal'
import { Fragment, useState } from 'react'


function Tv({ id, name, overview, popularity, first_air_date, vote_average, origin_country, backdrop_path, poster_path }) {

    const [showModal, setShowModal] = useState(false);

    return (
            <Fragment>
                <div className={style.container}>
                    <figure className={style.fig}>
                        <a onClick={() => setShowModal(true)} className="cursor-pointer">
                            {<Image
                                src={'https://image.tmdb.org/t/p/original' + poster_path}
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
                    <p className="text-base text-black font-bold pb-1"><span className="text-red-600 text-base font-bold">Name: </span>{name}</p>
                    <p className="text-base text-black font-bold pb-1"><span className="text-red-600 text-base font-bold">Popularity: </span>{popularity}</p>
                    <p className="text-base text-black font-bold pb-1"><span className="text-red-600 text-base font-bold">First Air Date: </span>{first_air_date}</p>
                    <p className="text-base text-black font-bold pb-1"><span className="text-red-600 textbase font-bold">Vote Average: </span>{vote_average}</p>
                    <p className="text-base text-black font-bold "><span className="text-red-600 text-base font-bold">Origin Country: </span>{origin_country}</p>
                    <div className="shadow-2xl max-h-[190px] overflow-auto">
                        <p className="text-red-400 px-4 pt-6">Ovreview: </p>
                        <p className="p-4 text-sm">{overview}</p>
                    </div>
                    <div className="flex flex-col justify-center mt-6">
                        {
                            <Image
                                src={'https://image.tmdb.org/t/p/original' + backdrop_path}
                                width={500}
                                height={250}
                                alt={name}
                                className="w-full hover:opacity-90 cursor-pointer"
                                priority
                            />
                        }
                    </div>
                </Modal>
            </Fragment>


    )
}

export default Tv