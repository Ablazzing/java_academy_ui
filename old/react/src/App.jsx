import { BrowserRouter } from 'react-router-dom'
import RouterApp from './router/RouterApp'

const App = () => {
  
  const setAppSize = () => {
    document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px')
  }
  setAppSize()
  
  window.addEventListener('resize', () => setAppSize())

  return (
    <BrowserRouter>
      <RouterApp />
    </BrowserRouter>
  )
}

export default App
