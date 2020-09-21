import React from 'react'
import { useSearch } from '../context/SearchContext'

export default function Search() {
  const { searchBy, onSearchHandler } = useSearch()

  return (
    <input
      className="notes__search"
      type="search"
      placeholder="Search"
      value={searchBy}
      onChange={e => onSearchHandler(e.target.value)}
    />
  )
}
