import React from 'react'
import { IoIosArrowRoundBack as BackIcon } from 'react-icons/io'
import { Link } from 'react-router-dom'
import GenreCard from '../components/Genre'
import './styles.scss'

const Genre = ({ genre, backingImgURL, rooms }) => (
  <section className="genre-page">
    <Link to="/dashboard" className="back-button">
      <BackIcon size={40} />
    </Link>
    <GenreCard
      genre={genre}
      backingImgURL={backingImgURL}
      rooms={rooms}
      showAll
    />
  </section>
)

export default Genre
