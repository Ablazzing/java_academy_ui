import { configureStore } from '@reduxjs/toolkit'
import userReducer from './StoreUser'

const store = configureStore({
  reducer: {
    user: userReducer
  }
})

export default store