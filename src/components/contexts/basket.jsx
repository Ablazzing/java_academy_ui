import { createContext, useContext, useReducer } from 'react'

const BasketContext = createContext()

const reducer = (basket, action) => {
  switch (action.type) {
    case 'toggle': return { ... basket, open: !basket.open }
    default: return basket
  }
}

export const useBasket = () => {
  return useContext(BasketContext)
}

export const BasketProvider = ({ children }) => {
  
  const [basket, dispatch] = useReducer(reducer, {
    open: false,
    basket: []
  })

  const toggleBasket = () => dispatch({ type: 'toggle' })

  return (
    <BasketContext.Provider value={{ basket, toggleBasket }}>
      { children }
    </BasketContext.Provider>
  )

}