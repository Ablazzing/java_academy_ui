import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './store/StoreIndex'
import App from './App'
import 'virtual:svg-icons-register'
import '@fontsource/inter'
import 'react-perfect-scrollbar/dist/css/styles.css'
import './assets/scss/app.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>
)