import { useEffect } from 'react'
import { useApp } from '@/components/context'

export const Loader = () => {
  
  const { state } = useApp()

  useEffect(() => {
    if(!state.loader) document.body.classList.add('visible')
  }, [state.loader])
  
  return (
    <div className={ `pageloader ${ state.loader ? '' : 'disabled' }` }>
      <div className="logo">
        <img src="/theme/logo_dark_gray.svg" alt="" />
        <img src="/theme/logo_dark.svg" alt="" />
      </div>
    </div>
  )

}

