import React from 'react'
import { Route } from 'react-router-dom'
import ContentSide from './components/ContentSide'
import ContentDefault from './components/ContentDefault'
import NotesSide from './components/NotesSide'
import CreateNote from './components/CreateNote'

function App() {
  return (
    <div className="notes">
      <NotesSide />
      <Route path="/create" exact component={CreateNote} />
      <Route path="/notes/:id" exact component={ContentSide} />
      <Route path="/" exact component={ContentDefault} />
    </div>
  )
}

export default App
