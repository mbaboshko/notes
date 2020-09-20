import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeActive, deleteNote, updateNote } from '../store/actions'
import ContentFooter from './ContentFooter'
import DarkLoader from './DarkLoader'

export default function ContentSide({ match }) {
  const { notes, active } = useSelector(state => state.notes)
  const { loading } = useSelector(state => state.app)
  const [editable, setEditable] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const onEditHandler = () => setEditable(true)

  const onSaveHandler = () => {
    setEditable(false)
    dispatch(updateNote({ _id: active, title, text }))
  }

  const onDeleteHandler = () => {
    dispatch(deleteNote(active))
    dispatch(changeActive(null))
    history.push('/')
  }

  useEffect(() => {
    if (typeof active === 'string') {
      const { title, text } = notes.find(note => active === note._id)
      setTitle(title)
      setText(text)
    } else if (notes.length > 0 && match.params.id) {
      dispatch(changeActive(match.params.id))
    }
  }, [notes, active, dispatch, match.params.id])

  useEffect(() => {
    setEditable(false)
  }, [active])

  if (loading || typeof active !== 'string') return <DarkLoader />

  return (
    <div className="content__side">
      <input
        className="content__header"
        type="text"
        placeholder="Enter a title for your note"
        value={title}
        onChange={editable ? e => setTitle(e.target.value) : null}
        readOnly={editable ? false : true}
      />
      <textarea
        className="content__text"
        placeholder="Enter your note text"
        value={text}
        onChange={editable ? e => setText(e.target.value) : null}
        readOnly={editable ? false : true}
      ></textarea>
      <ContentFooter
        editable={editable}
        onEdit={onEditHandler}
        onSave={onSaveHandler}
        onDelete={onDeleteHandler}
      />
    </div>
  )
}
