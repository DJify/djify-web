import React from 'react'
import { FaUserCircle as ProfileIcon } from 'react-icons/fa'
import { IoIosAdd as AddIcon } from 'react-icons/io'

const Nav = ({}) => (
  <nav>
    <button className="profile-button">
      <ProfileIcon size={40} />
    </button>
    <input placeholder="Search" />
    <button>
      <AddIcon size={40} />
    </button>
  </nav>
)

export default Nav
