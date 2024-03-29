import React from 'react'
import GenreCard from './GenreCard'
import Nav from './Nav'
import './styles.scss'

const dummyData = [
  {
    genre: 'Pop',
    backingImgURL: '/example-media/concert-strobe.gif',
    rooms: [
      {
        imgURL: '/example-media/album-cover.jpg',
        name: 'Party Room',
        djList: ['DJ Howey'],
        listenerCount: 21,
      },
      {
        imgURL: '/example-media/album-cover.jpg',
        name: 'Party Room',
        djList: ['DJ Howey'],
        listenerCount: 21,
      },
      {
        imgURL: '/example-media/album-cover.jpg',
        name: 'Party Room',
        djList: ['DJ Howey'],
        listenerCount: 21,
      },
    ],
  },
  {
    genre: 'Lofi House',
    backingImgURL: '/example-media/concert-strobe.gif',
    rooms: [
      {
        imgURL: '/example-media/album-cover.jpg',
        name: 'Party Room',
        djList: ['DJ Howey'],
        listenerCount: 21,
      },
      {
        imgURL: '/example-media/album-cover.jpg',
        name: 'Party Room',
        djList: ['DJ Howey'],
        listenerCount: 21,
      },
      {
        imgURL: '/example-media/album-cover.jpg',
        name: 'Party Room',
        djList: ['DJ Howey'],
        listenerCount: 21,
      },
    ],
  },
]

const Dashboard = (_) => (
  <section className="dashboard-page">
    <Nav />
    {dummyData.map(data => (
      <GenreCard
        genre={data.genre}
        backingImgURL={data.backingImgURL}
        rooms={data.rooms}
      />
    ))}
  </section>
)

export default Dashboard
