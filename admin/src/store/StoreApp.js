import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    auth: false
  },
  reducers: {
    toggleAuth: state => {
      state.auth = !state.auth
    }
  }
})

export const { 
  toggleAuth
} = appSlice.actions

export default appSlice.reducer