import React from 'react'
import TextInput from '../components/TextInput'
import './styles.scss'
import { useHistory } from 'react-router-dom'

const AddRoom = () => {
  const history = useHistory()
  const [open, setOpen] = React.useState(true)

  React.useEffect(() => {
    const bodyEl = document.querySelector('body')
    bodyEl.classList.add('no-scroll')
    return () => {
      bodyEl.classList.remove('no-scroll')
    }
  }, [])

  const createRoom = e => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const apiData = {
      name: formData.get('concert_name'),
      genre: formData.get('concert_genre'),
    }
    console.log(apiData)
  }

  const collapse = () => {
    setOpen(false)
    setTimeout(() => {
      history.push('/dashboard')
    }, 300)
  }

  return (
    <section className={`add-room-page ${open ? 'opening' : 'closing'}`}>
      <div className="background" onClick={collapse}></div>
      <form className="card" onSubmit={createRoom}>
        <TextInput
          className="form-input"
          id="concert_name"
          name="concert_name"
          label="Concert name"
        />
        <label htmlFor="concert_genre" className="genre-label">
          Genre
        </label>
        <select
          className="genre-select form-input"
          id="concert_genre"
          name="concert_genre"
        >
          <option>Rock</option>
          <option>Pop</option>
        </select>
        <button type="submit">Create concert</button>
      </form>
    </section>
  )
}

export default AddRoom
