import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '@/store/StoreIndex'
import { signOut } from '@/store/StoreUser'
import AuthRepository from '@/repositories/auth'
import Loader from '@/components/Loader'
import '@fontsource/inter'
import '@/assets/scss/app.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'swiper/css'

const JavaApp = ({ Component, pageProps }) => {

  const router = useRouter()
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {

    const html = document.documentElement.style
    const setWindowHeight = () => html.setProperty('--app-height', window.innerHeight + 'px')
    setWindowHeight()
    window.addEventListener('resize', () => setWindowHeight())

    const checkAuth = async () => {
      if(window.localStorage.getItem('token')) {
        const response = await AuthRepository.checkToken()
        const redirectRoutes = ['/', '/signin', '/signup', '/forgot']
        if(response && redirectRoutes.indexOf(router.asPath) >= 0) {
          router.push('/userway')
        }
      } else if(router.asPath.indexOf('/userway') >= 0) {
        await store.dispatch(signOut())
      }
      setLoaded(true)
    }
    checkAuth()

  }, [])
  
  return (
    <Provider store={ store }>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>
      { loaded && <Component { ...pageProps } /> }
      <Loader />
    </Provider>
  )

}

export default JavaApp
