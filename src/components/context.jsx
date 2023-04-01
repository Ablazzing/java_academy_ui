import { createContext, useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'
import { getSectionByRoute, checkAuth, checkRoutes } from '@/utils'
import { appStore } from '@/store'

const AppContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'setState': return { ... state, [action.key]: action.state }
    default: return state
  }
}

export const useApp = () => {
  return useContext(AppContext)
}

export const AppProvider = ({ children }) => {
  
  const router = useRouter()
  const [state, dispatch] = useReducer(reducer, {
    section: 'index',
    loader: true,
    basket: false,
    menu: false
  })

  const updateApp = async (route) => {
    setLoader(true)
    const section = await getSectionByRoute(route)
    dispatch({ type: 'setState', key: 'section', state: section })
    if(appStore.getState().app.auth === null) await checkAuth()
    await checkRoutes(section)
  }
  const setLoader = loader => dispatch({ type: 'setState', key: 'loader', state: loader })
  const setBasket = basket => dispatch({ type: 'setState', key: 'basket', state: basket })
  const setMenu = menu => dispatch({ type: 'setState', key: 'menu', state: menu })

  useEffect(() => {
    updateApp(router.asPath)
  }, [])
  useEffect(() => {
    router.events.on('routeChangeStart', (route) => {
      document.body.classList.remove('visible')
      updateApp(route)
    })
  }, [ router.events ])

  return (
    <AppContext.Provider value={{ state, setLoader, setBasket, setMenu }}>
      { children }
    </AppContext.Provider>
  )

}