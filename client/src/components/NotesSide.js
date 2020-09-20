import React from 'react'
import NotesFooter from './NotesFooter'
import NotesList from './NotesList'
import Search from './Search'

export default function NotesSide() {
  return (
    <div className="notes__side">
      <header className="notes__header">
        <h1 className="notes__logo">Notes</h1>
      </header>

      <Search />

      <NotesList />

      <NotesFooter />
    </div>
  )
}
