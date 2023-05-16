import React from 'react'
import ReactDOM from 'react-dom/client'
import Routers from './app/routers'
import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Routers />
  </Provider>,
)
