import React from 'react'
import SongListing from './SongListing'

const GenreCard = ({ genre, backingImgURL, rooms }) => (
  <section className="card">
    <div
      className="backing"
      style={{ backgroundImage: `url(${backingImgURL})` }}
    >
      <h2>{genre}</h2>
    </div>
    {rooms.map(roomInfo => (
      <SongListing {...roomInfo} />
    ))}
  </section>
)

export default GenreCard
