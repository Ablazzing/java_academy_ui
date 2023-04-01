import router from 'next/router'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const defaultState = {
  auth: null,
  profile: null,
  notify: 0,
  basket: []
}

export const appSlice = createSlice({
  name: 'app',
  initialState: JSON.parse(JSON.stringify(defaultState)),
  reducers: {
    setProfile: (state, data) => {
      state.auth = true
      state.profile = { ... state.profile, ... data.payload, isAdmin: true }
      if(state.profile.token) window.localStorage.setItem('token', state.profile.token)
      
      //response.isAdmin = response.roles.find(e => e.toLowerCase === 'ROLE_ADMIN') ? true : false
      //response.isModerator = response.roles.find(e => e.toLowerCase === 'ROLE_MODERATOR') ? true : false
      //delete response.roles
    },
    removeProfile: (state) => {
      state = JSON.parse(JSON.stringify(defaultState))
      state.auth = false
      router.asPath !== '/' && router.push('/')
      window.localStorage.removeItem('token')
    },
    setNotify: (state, data) => {
      state.notify = data.payload
    },
    setBasket: (state, data) => {
      state.notify = data.payload
    }
  }
})

export const appStore = configureStore({
  reducer: {
    app: appSlice.reducer
  }
})

export const {
  setProfile,
  removeProfile,
  setNotify,
  setBasket
} = appSlice.actions