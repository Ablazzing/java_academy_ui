import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    loader: {
      active: true,
      visible: true
    },
    mobileMenu: false,
    basket: {
      className: {
        basket: true
      },
      data: []
    },
    notifications: {
      count: 0,
      data: []
    },
  },
  reducers: {
    toggleLoader: (state, data) => {
      state.loader = { ... state.loader, ... data.payload }
    },
    toggleMobileMenu: state => {
      state.mobileMenu = !state.mobileMenu
    },
    toggleBasket: state => {
      if(state.basket.className.active) {
        delete state.basket.className.open
        delete state.basket.className.active
      } else {
        state.basket.className.active = true
        state.basket.className.open = true
      }
    },
    setNotifications: (state, data) => {
      state.notifications = { ... state.notifications, ... data.payload }
    }
  }
})

export const { 
  toggleLoader,
  toggleMobileMenu,
  toggleBasket,
  setNotifications
} = appSlice.actions

export default appSlice.reducer