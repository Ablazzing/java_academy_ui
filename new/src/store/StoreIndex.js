import { configureStore } from '@reduxjs/toolkit'
import appReducer from './StoreApp'
import userReducer from './StoreUser'
import wayReducer from './StoreWay'

const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
    way: wayReducer,
  }
})

export default store