import React from 'react'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer'
import { Provider } from 'react-redux'

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default function Store({ children }) {
  return <Provider store={store}>{children}</Provider>
}
