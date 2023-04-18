import { createContext, useContext, useReducer } from 'react'

const OffersContext = createContext()

const reducer = (offers, action) => {
  switch (action.type) {
    case 'toggle': return !offers
    default: return offers
  }
}

export const useOffers = () => {
  return useContext(OffersContext)
}

export const OffersProvider = ({ children }) => {
  
  const [offers, dispatch] = useReducer(reducer, false)

  const toggleOffers = () => dispatch({ type: 'toggle' })

  return (
    <OffersContext.Provider value={{ offers, toggleOffers }}>
      { children }
    </OffersContext.Provider>
  )

}