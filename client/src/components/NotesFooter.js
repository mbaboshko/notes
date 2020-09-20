import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeActive } from '../store/actions'

export default function NotesFooter() {
  const dispatch = useDispatch()
  const { notes } = useSelector(state => state.notes)

  return (
    <footer className="notes__footer">
      <span className="notes__counter">{notes.length} notes</span>
      <Link className="notes__creator" onClick={() => dispatch(changeActive(null))} to="/create">
        Create
      </Link>
    </footer>
  )
}
