import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeActive } from '../store/actions'
import NotesFooter from './NotesFooter'
import NotesList from './NotesList'
import Search from './Search'

export default function NotesSide() {
  const { active } = useSelector(state => state.notes)
  const dispatch = useDispatch()

  const onLogoHandler = () => {
    if (active) dispatch(changeActive(null))
  }

  return (
    <div className="notes__side">
      <header className="notes__header">
        <Link to="/" className="notes__logo" onClick={onLogoHandler}>
          Notes
        </Link>
      </header>

      <Search />

      <NotesList />

      <NotesFooter />
    </div>
  )
}
