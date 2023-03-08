import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    auth: true
  },
  reducers: {
    signIn: state => {
      state.auth = true
    },
    signOut: state => {
      state.auth = false
    }
  }
})

export const { signIn, signOut } = userSlice.actions

export default userSlice.reducer