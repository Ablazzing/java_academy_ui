import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { toggleLoader } from '@/store/StoreApp'

const Loader = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const loader = useSelector(state => state.app.loader)
  const refProgress = useRef()
  let lastRoute = router.pathname
  let loaderInterval = null
  const runLoader = (progress) => {
    if(loaderInterval) clearInterval(loaderInterval)
    loaderInterval = setInterval(() => {
      --progress
      if(progress) {
        refProgress.current.style.clipPath = 'inset(0 ' + progress + 'px 0 0)'
      } else {
        if(loader.active) {
          dispatch(toggleLoader({ active: false, visible: false }))
          refProgress.current.style.clipPath = 'inset(0 140px 0 0)'
          document.body.classList.add('visible')
          clearInterval(loaderInterval)
        }
      }
    }, .5)
  }
  useEffect(() => runLoader(140), [])
  useEffect(() => {
    const handleRouteChange = (route) => {
      if(route !== lastRoute) {
        lastRoute = route
        document.body.classList.remove('visible')
        runLoader(140)
        dispatch(toggleLoader({ active: true, visible: true }))
      }
    }
    router.events.on('routeChangeStart', handleRouteChange)
  }, [router.events])
  
  return (
    <div className={loader.visible ? 'pageloader' : 'pageloader disabled'}>
      <div className="logo">
        <img src="/theme/img/logo_dark_gray.svg" alt="" />
        <img style={{clipPath: 'inset(0 140px 0 0)'}} ref={ refProgress } src="/theme/img/logo_dark.svg" alt="" />
      </div>
    </div>
  )

}

export default Loader
