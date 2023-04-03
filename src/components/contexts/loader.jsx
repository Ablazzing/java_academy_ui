import { createContext, useContext, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router'

const LoaderContext = createContext()

const reducer = (loader, action) => {
  switch (action.type) {
    case 'toggle': return action.open
    default: return loader
  }
}

export const useLoader = () => {
  return useContext(LoaderContext)
}

export const LoaderProvider = ({ children }) => {
  
  const router = useRouter()
  const [loader, dispatch] = useReducer(reducer, true)

  const closeLoader = () => dispatch({ type: 'toggle', open: false })

  useEffect(() => dispatch({ type: 'toggle', open: true }), [])
  useEffect(() => {
    router.events.on('routeChangeStart', (route) => {
      if(route != router.asPath) {
        document.body.classList.remove('visible')
        dispatch({ type: 'toggle', open: true })
      }
    })
  }, [ router.events ])

  return (
    <LoaderContext.Provider value={{ loader, closeLoader }}>
      { children }
    </LoaderContext.Provider>
  )

}