import { useEffect } from 'react'
import Head from 'next/head'
import Router from 'next/router'
import { Provider } from 'react-redux'
import store from '@/store/StoreIndex'
import ApiRepository from '@/repositories/api'
import { toggleLoader } from '@/store/StoreApp'
import { signOut } from '@/store/StoreUser'
import Loader from '@/components/Loader'
import '@fontsource/inter'
import '@/assets/scss/app.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'swiper/css'

const JavaApp = ({ Component, pageProps }) => {

  useEffect(() => {
    const setAppSize = () => {
      document.documentElement.style.setProperty('--app-height', window.innerHeight + 'px')
    }
    setAppSize()
    window.addEventListener('resize', () => setAppSize())
    const checkAuth = async () => {
      const token = window.localStorage.getItem('token')
      if(token) {
        const response = await ApiRepository.getNotificationsCount()
        const redirectRoutes = ['/', '/signin', '/signup', '/forgot']
        if(response && redirectRoutes.indexOf(Router.asPath) >= 0) {
          Router.push('/userway')
        }
      } else if(Router.asPath.indexOf('/userway') >= 0) {
        await store.dispatch(signOut())
      }
      await store.dispatch(toggleLoader({ active: false }))
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
      <Component { ...pageProps } />
      <Loader />
    </Provider>
  )

}

export default JavaApp
