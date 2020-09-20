import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { createNote } from '../store/actions'

export default function CreateNote() {
  const dispatch = useDispatch()
  const history = useHistory()
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  const onSaveHandler = () => {
    dispatch(createNote({ title, text }))
    history.push('/')
    setTitle('')
    setText('')
  }

  return (
    <div className="content__side">
      <input
        className="content__header"
        type="text"
        placeholder="Enter a title for your note"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        className="content__text"
        placeholder="Enter your note text"
        value={text}
        onChange={e => setText(e.target.value)}
      ></textarea>
      <footer className="content__footer">
        <button className="btn btn--grey" onClick={onSaveHandler}>
          Save
        </button>
      </footer>
    </div>
  )
}
