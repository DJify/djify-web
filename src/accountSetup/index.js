import React from 'react'
import TextInput from '../components/TextInput'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'
import { Link } from 'react-router-dom'
import { useUserState } from '../UserStore'

const images = [
  require('../resources/img/avatar/WhiteMale.png'),
  require('../resources/img/avatar/TanMale.png'),
  require('../resources/img/avatar/BrownMale.png'),
  require('../resources/img/avatar/BlackMale.png'),
  require('../resources/img/avatar/WhiteFemale.png'),
  require('../resources/img/avatar/TanFemale.png'),
  require('../resources/img/avatar/BrownFemale.png'),
  require('../resources/img/avatar/BlackFemale.png'),
]

const animations = [
  require('../resources/img/dj-animations/DJ White Male.gif'),
  require('../resources/img/dj-animations/DJ Tan Male.gif'),
  require('../resources/img/dj-animations/DJ Brown Male.gif'),
  require('../resources/img/dj-animations/DJ Black Male.gif'),
  require('../resources/img/dj-animations/DJ White Female.gif'),
  require('../resources/img/dj-animations/DJ Tan Female.gif'),
  require('../resources/img/dj-animations/DJ Brown Female.gif'),
  require('../resources/img/dj-animations/DJ Black Female.gif'),
]

const Account = () => {
  const [user, dispatch] = useUserState()
  const [username, setUsername] = React.useState(user.username)
  const [dj, setDj] = React.useState(user.wantsToDj)
  const [chosenAvatarId, setChosenAvatarId] = React.useState(
    user.chosenAvatarId
  )

  const onChange = e => {
    setUsername(e.target.value)
  }

  const handleToggle = e => {
    setDj(e.target.checked)
  }

  const onSubmit = () => {
    dispatch({
      type: 'updateUser',
      username,
      chosenAvatarId,
      wantsToDj: dj,
    })
  }

  return (
    <div id="account" className="center">
      <TextInput
        id="account_username"
        label="Username"
        onChange={onChange}
        value={username}
      />
      <br />
      <label>Select an avatar</label>
      <div className="avatar-row center">
        {images.map((item, index) => (
          <img
            onClick={() => setChosenAvatarId(index)}
            src={chosenAvatarId === index ? animations[index] : item}
            style={{
              height: chosenAvatarId === index ? 120 : 110,
            }}
            className="avatar"
            key={index}
            alt={index}
          />
        ))}
      </div>
      <br />
      <label className="toggle-wrapper">
        <span>Do you want to be a DJ?</span>
        <Toggle defaultChecked={dj} onChange={handleToggle} />
      </label>
      <br />
      {username.length > 0 && (
        <Link to="/dashboard" className="btn-block" onClick={onSubmit}>
          Start listening
        </Link>
      )}
    </div>
  )
}

export default Account
