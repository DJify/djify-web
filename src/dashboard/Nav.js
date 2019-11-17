import React from 'react'
import { FaUserCircle as ProfileIcon } from 'react-icons/fa'
import { IoIosAdd as AddIcon } from 'react-icons/io'
import TextInput from '../components/TextInput'

const Nav = () => (
  <nav>
    <button>
      <ProfileIcon size={40} />
    </button>
    <div className="genre-search-container">
      <TextInput id="search_genre" label="Search" />
    </div>
    <button>
      <AddIcon size={40} />
    </button>
  </nav>
)

export default Nav
