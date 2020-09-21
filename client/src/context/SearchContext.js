import React, { createContext, useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFilteredNotes, getNotes } from '../store/actions'

const SearchContext = createContext()

export const useSearch = () => useContext(SearchContext)

export const SearchProvider = ({ children }) => {
  const [searchBy, setSearchBy] = useState('')

  const dispatch = useDispatch()

  const onSearchHandler = text => {
    setSearchBy(text)
    if (text.length > 0) return dispatch(getFilteredNotes(text))
    dispatch(getNotes())
  }

  const clearSearchField = () => setSearchBy('')

  return (
    <SearchContext.Provider value={{ searchBy, onSearchHandler, clearSearchField }}>
      {children}
    </SearchContext.Provider>
  )
}
