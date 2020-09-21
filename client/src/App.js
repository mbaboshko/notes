import React from 'react'
import { Route } from 'react-router-dom'
import ContentSide from './components/ContentSide'
import ContentDefault from './components/ContentDefault'
import NotesSide from './components/NotesSide'
import CreateNote from './components/CreateNote'
import { SearchProvider } from './context/SearchContext'

function App() {
  return (
    <div className="notes">
      <SearchProvider>
        <NotesSide />
        <Route path="/create" exact component={CreateNote} />
        <Route path="/notes/:id" exact component={ContentSide} />
        <Route path="/" exact component={ContentDefault} />
      </SearchProvider>
    </div>
  )
}

export default App
