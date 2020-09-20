import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { changeActive, getNotes } from '../store/actions'
import Loader from './LightLoader'
import NoteItem from './NoteItem'

export default function NotesList() {
  const dispatch = useDispatch()
  const history = useHistory()
  const { notes, active } = useSelector(state => state.notes)
  const loading = useSelector(state => state.app.loading)

  useEffect(() => {
    dispatch(getNotes())
  }, [dispatch])

  const onActiveHandler = id => {
    if (active !== id) return dispatch(changeActive(id))
    dispatch(changeActive(null))
    history.push('/')
  }

  if (loading) return <Loader />

  return (
    <ul className="notes__list">
      {notes.map((note, idx) => (
        <NoteItem
          key={note._id}
          id={note._id}
          title={note.title}
          text={note.text}
          date={new Date(note.date).toLocaleDateString()}
          active={active}
          onActive={() => onActiveHandler(note._id)}
        />
      ))}
    </ul>
  )
}
