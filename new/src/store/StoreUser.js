import { createSlice } from '@reduxjs/toolkit'
import Router from 'next/router'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: false,
    data: {}
  },
  reducers: {
    signIn: (state, data) => {
      state.data = data.payload
      window.localStorage.setItem('token', data.payload.token)
      state.auth = true
      Router.push('/userway')
    },
    signOut: state => {
      state.auth = false
      window.localStorage.removeItem('token')
      Router.push('/')
    }
  }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer