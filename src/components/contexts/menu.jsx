import { createContext, useContext, useReducer } from 'react'

const MenuContext = createContext()

const reducer = (menu, action) => {
  switch (action.type) {
    case 'toggle': return !menu
    default: return state
  }
}

export const useMenu = () => {
  return useContext(MenuContext)
}

export const MenuProvider = ({ children }) => {
  
  const [menu, dispatch] = useReducer(reducer, false)

  const toggleMenu = () => dispatch({ type: 'toggle' })

  return (
    <MenuContext.Provider value={{ menu, toggleMenu }}>
      { children }
    </MenuContext.Provider>
  )

}