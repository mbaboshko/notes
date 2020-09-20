import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Store from './store/Store'
import App from './App'
import './index.css'

const app = (
  <Store>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Store>
)

ReactDOM.render(app, document.getElementById('root'))
