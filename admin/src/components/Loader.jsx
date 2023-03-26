import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { addEvent } from '@/utils'

const LoaderComponent = () => {
  
  const router = useRouter()
  const [loaderVisible, setLoaderVisible] = useState(true)
  const refProgress = useRef()
  let lastRoute = router.pathname
  let loaderActive = true
  let loaderInterval = null
  const runLoader = () => {
    if(loaderInterval) clearInterval(loaderInterval)
    let progress = 140
    loaderInterval = setInterval(() => {
      --progress
      if(progress > 0) {
        refProgress.current.style.clipPath = 'inset(0 ' + progress + 'px 0 0)'
      } else {
        if(!loaderActive) {
          clearInterval(loaderInterval)
          setLoaderVisible(false)
          refProgress.current.style.clipPath = 'inset(0 140px 0 0)'
          document.body.classList.add('visible')
          loaderActive = false
        }
      }
    }, .5)
  }
  const handleRouteChange = (route) => {
    if(route !== lastRoute) {
      lastRoute = route
      document.body.classList.remove('visible')
      runLoader()
      setLoaderVisible(true)
      loaderActive = true
    }
  }
  
  useEffect(() => {
    runLoader()
    addEvent('stopLoader', () => {
      console.log('stopLoader')
      loaderActive = false
    })
  }, [])
  useEffect(() => {
    router.events.on('routeChangeStart', handleRouteChange)
  }, [router.events])

  return (
    <div className={ `pageloader ${ loaderVisible ? '' : 'disabled' }` }>
      <div className="logo">
        <img src="/theme/img/logo_dark_gray.svg" alt="" />
        <img style={{clipPath: 'inset(0 140px 0 0)'}} ref={ refProgress } src="/theme/img/logo_dark.svg" alt="" />
      </div>
    </div>
  )

}

export default LoaderComponent
