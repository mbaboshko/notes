import { combineReducers } from 'redux'
import notes from './reducers/notes'
import app from './reducers/app'

export default combineReducers({ notes, app })
