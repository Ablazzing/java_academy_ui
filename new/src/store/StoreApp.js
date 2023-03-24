import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    menu: false
  },
  reducers: {
    toggleMenu: state => {
      state.menu = !state.menu
    }
  }
})

export const { 
  toggleMenu
} = appSlice.actions

export default appSlice.reducer