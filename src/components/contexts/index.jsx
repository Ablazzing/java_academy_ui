import { createContext, useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { appStore, setProfile } from '@/store'
import { appApi } from '@/repositories'

const AppContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'setSection': return { section: action.section }
    default: return state
  }
}

export const useApp = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, {
    section: 'index'
  })

  const getSectionByRoute = (route) => {
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

  const checkAuth = async () => {
    if(window.localStorage.getItem('token')) {
      const response = await appApi().user.getProfile()
      if(response) appStore.dispatch(setProfile(response))
    }
  }

  const checkRoutes = (section) => {
    return new Promise(resolve => {
      const user = appStore.getState().app
      if(user.auth) {
        if(user.profile.isAdmin || user.profile.isModerator) {
          section === 'admin' || router.push('/admin')
        } else {
          section === 'userway' || router.push('/userway')
        }
      } else if(section !== 'index' && section !== 'auth') {
        router.push('/')
      }
      resolve()
    })
  }

  const updateApp = async (route) => {
    const section = await getSectionByRoute(route)
    dispatch({ type: 'setSection', section: section })
    if(appStore.getState().app.auth === null) await checkAuth()
    await checkRoutes(section)
  }

  useEffect(() => {
    updateApp(router.asPath)
  }, [])
  useEffect(() => {
    router.events.on('routeChangeStart', (route) => updateApp(route))
  }, [ router.events ])

  return (
    <AppContext.Provider value={{ state }}>
      { children }
    </AppContext.Provider>
  )

}