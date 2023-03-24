import { createSlice } from '@reduxjs/toolkit'
import Router from 'next/router'

const defaultState = {
  auth: false,
  profile: null,
  notificationsCount: 0,
  notifications: [],
  basket: []
}

export const userSlice = createSlice({
  name: 'user',
  initialState: defaultState,
  reducers: {
    signIn: (state, data) => {
      state.data = data.payload
      window.localStorage.setItem('token', data.payload.token)
      state.auth = true
      Router.push('/userway')
    },
    signOut: state => {
      state = defaultState
      window.localStorage.removeItem('token')
      Router.push('/')
    },
    setProfile: (state, data) => {
      state.auth = true
      state.profile = data.payload
    },
    setNotifications: (state, data) => {
      state[data.payload.key] = data.payload.state
    },
    setBasket: (state, data) => {
      state.basket = data.payload
    }
  }
})

export const { 
  signIn, 
  signOut,
  setProfile,
  setNotifications,
  setBasket
} = userSlice.actions

export default userSlice.reducer