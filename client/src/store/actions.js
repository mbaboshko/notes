import axios from '../axios/notes'
import {
  NOTES_LOADED,
  START_LOADING,
  FINISH_LOADING,
  CHANGE_ACTIVE_NOTE,
} from './constants/actionTypes'

// Sync ===============================================================================

export const changeActive = id => ({ type: CHANGE_ACTIVE_NOTE, payload: id })
export const notesLoaded = notes => ({ type: NOTES_LOADED, payload: notes })
export const startLoading = () => ({ type: START_LOADING })
export const finishLoading = () => ({ type: FINISH_LOADING })

// Async ==============================================================================

export const getNotes = () => async dispatch => {
  dispatch(startLoading())

  try {
    const { data } = await axios.get('/')

    dispatch(notesLoaded(data))
    dispatch(finishLoading())
  } catch (error) {
    dispatch(finishLoading())
    console.error('Error:', error.message)
  }
}

export const createNote = note => async dispatch => {
  try {
    const { data } = await axios.post('/', note)

    if (data.status === 'success') dispatch(getNotes())
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export const deleteNote = id => async dispatch => {
  try {
    const { data } = await axios.delete(`/${id}`)

    if (data.status === 'success') dispatch(getNotes())
  } catch (error) {
    console.error('Error:', error.message)
  }
}

export const updateNote = note => async dispatch => {
  try {
    const { data } = await axios.put(`/${note._id}`, note)

    if (data.status === 'success') dispatch(getNotes())
  } catch (error) {
    console.error('Error:', error.message)
  }
}
