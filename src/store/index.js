import router from 'next/router'
import { createSlice, configureStore } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    auth: null,
    profile: null,
    notify: 0,
    basket: []
  },
  reducers: {
    setProfile: (state, data) => {
      state.auth = true
      const roles = {
        isUser: data.payload.roles.find(e => e.toUpperCase() === 'ROLE_USER') ? true : false,
        isAdmin: data.payload.roles.find(e => e.toUpperCase() === 'ROLE_ADMIN') ? true : false,
        isModerator: data.payload.roles.find(e => e.toUpperCase() === 'ROLE_MODERATOR') ? true : false
      }
      state.profile = { ... state.profile, ... data.payload, ... roles}
      if(state.profile.token) window.localStorage.setItem('token', state.profile.token)
    },
    removeProfile: (state) => {
      state.auth = false
      state.profile = null,
      state.notify = 0,
      state.basket = []
      window.localStorage.removeItem('token')
      router.asPath !== '/' && router.push('/')
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


/*
Modules
[
    {
        "name": "Открыт",
        "color": "синий"
    },
    {
        "name": "Изучается",
        "color": "желтый"
    },
    {
        "name": "Пройден",
        "color": "зеленый"
    }
]
Projects
[
    {
        "name": "Открыт",
        "color": "синий"
    },
    {
        "name": "В работе",
        "color": "желтый"
    },
    {
        "name": "Принят",
        "color": "зеленый"
    }
]
Steps
[
    {
        "name": "Открыт",
        "color": "синий"
    },
    {
        "name": "На проверке",
        "color": "желтый"
    },
    {
        "name": "Принят",
        "color": "зеленый"
    },
    {
        "name": "Нужны доработки",
        "color": "красный"
    }
]
*/