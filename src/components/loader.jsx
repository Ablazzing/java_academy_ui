import { useEffect } from 'react'
import { useLoader } from '@/components/contexts/loader'

export const Loader = () => {
  
  const { loader } = useLoader()

  useEffect(() => {
    if(!loader) document.body.classList.add('visible')
  }, [ loader ])

  return (
    <div className={`pageloader ${!loader ? 'hide' : ''}`}>
      <div className="logo">
        <img src="/theme/logo_dark_gray.svg" alt="" />
        <img src="/theme/logo_dark.svg" alt="" />
      </div>
    </div>
  )

}

