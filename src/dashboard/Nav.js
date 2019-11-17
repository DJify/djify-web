import React from 'react'
import { FaUserCircle as ProfileIcon } from 'react-icons/fa'
import { IoIosAdd as AddIcon } from 'react-icons/io'
import { Link } from 'react-router-dom'
import TextInput from '../components/TextInput'

const Nav = () => (
  <nav>
    <Link to="/account">
      <ProfileIcon size={40} />
    </Link>
    <div className="genre-search-container">
      <TextInput id="search_genre" label="Search" />
    </div>
    <Link to="/dashboard/addRoom">
      <AddIcon size={40} />
    </Link>
  </nav>
)

export default Nav
