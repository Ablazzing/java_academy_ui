import { useEffect } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { appStore } from '@/store'
import { AppProvider } from '@/components/context'
import '@fontsource/inter'
import '@/assets/scss/app.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'swiper/css'

const JavaApp = ({ Component, pageProps }) => {

  useEffect(() => {
    const html = document.documentElement.style
    const setWindowHeight = () => html.setProperty('--app-height', window.innerHeight + 'px')
    setWindowHeight()
    window.addEventListener('resize', () => setWindowHeight())
  }, [])

  return (
    <Provider store={ appStore }>
      <AppProvider>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component { ... pageProps } />
      </AppProvider>
    </Provider>
  )

}

export default JavaApp
