import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { changeActive, deleteNote, updateNote } from '../store/actions'
import ContentFooter from './ContentFooter'
import ContentDefault from './ContentDefault'
import DarkLoader from './DarkLoader'
import { useSearch } from '../context/SearchContext'

export default function ContentSide({ match }) {
  const { notes, active } = useSelector(state => state.notes)
  const { loading } = useSelector(state => state.app)
  const [checkActive, setCheckActive] = useState(null)

  const [editable, setEditable] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const { clearSearchField } = useSearch()

  const onEditHandler = () => setEditable(true)

  const onSaveHandler = () => {
    setEditable(false)
    clearSearchField()
    dispatch(updateNote({ _id: active, title, text, date: new Date() }))
  }

  const onDeleteHandler = () => {
    dispatch(deleteNote(active))
    dispatch(changeActive(null))
    clearSearchField()
    history.push('/')
  }

  useEffect(() => {
    if (!loading && notes.length > 0) {
      const activeNote = notes.find(note => match.params.id === note._id)
      setCheckActive(activeNote)

      if (activeNote) {
        const { title, text, _id } = activeNote

        setTitle(title)
        setText(text)

        if (!active) dispatch(changeActive(_id))
      }
    }
  }, [notes, loading, active, dispatch, match.params.id])

  useEffect(() => {
    setEditable(false)
  }, [active])

  if (!checkActive || notes.length === 0) return <ContentDefault />
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
