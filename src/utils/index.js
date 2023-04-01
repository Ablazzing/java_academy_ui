import Router from 'next/router'
import { EffectFade, Navigation, Pagination } from 'swiper'
import { appStore, setProfile } from '@/store'
import { appApi } from '@/repositories'

export const getSectionByRoute = (route) => {
  return new Promise(resolve => {
    const alias = route.split('/')[1]
    const sections = { 
      userway: 'userway', 
      admin: 'admin', 
      signin: 'auth', 
      signup: 'auth', 
      forgot: 'auth' 
    }
    resolve(sections[alias] ? sections[alias] : 'index')
  })
}

export const checkAuth = async () => {
  if(window.localStorage.getItem('token')) {
    const response = await appApi().user.getProfile()
    if(response) appStore.dispatch(setProfile(response.data))
  }
  return false
}

export const checkRoutes = (section) => {
  return new Promise(resolve => {
    const user = appStore.getState().app
    if(user.auth) {
      if(user.profile.isAdmin || user.profile.isModerator) {
        section === 'admin' || Router.push('/admin')
      } else {
        section === 'userway' || Router.push('/userway')
      }
    } else if(section !== 'index' && section !== 'auth') {
      Router.push('/')
    }
    resolve()
  })
}

export const slideToBox = (e) => {
  const target = document.querySelector('[data-scroll-target="'+e+'"]')
  target && window.scrollBy({
    top: target.getBoundingClientRect().top,
    behavior: 'smooth'
  })
}

export const mainSwiperConfig = {
  modules: [ Navigation ],
  navigation: {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  }
}

export const testSwiperConfig = {
  modules: [ EffectFade, Navigation, Pagination ],
  navigation: {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  },
  pagination: {
    el: '.pagination',
    clickable: true
  }
}

export const lectionSwiperConfig = {
  modules: [ Navigation ],
  navigation: {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  }
}