import { configureStore } from '@reduxjs/toolkit'
import appReducer from './StoreApp'

const store = configureStore({
  reducer: {
    app: appReducer
  }
})

export default store