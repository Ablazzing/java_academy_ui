import { configureStore } from '@reduxjs/toolkit'
import appReducer from './StoreApp'
import userReducer from './StoreUser'

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  }
})

export default store