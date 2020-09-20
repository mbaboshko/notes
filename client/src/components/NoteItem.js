import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { changeActive } from '../store/actions'

export default function NoteItem(props) {
  const { id, title, text, date, active, onActive } = props
  const dispatch = useDispatch()

  return (
    <li className="notes__list-item" onClick={onActive}>
      <Link
        className={`note ${active === id && 'active'}`}
        onClick={() => dispatch(changeActive(null))}
        to={`/notes/${id}`}
      >
        <h4 className="note__title">{title}</h4>
        <div className="note__content">
          <span className="note__date">{date}</span>
          <p className="note__text">{text}</p>
        </div>
      </Link>
    </li>
  )
}
