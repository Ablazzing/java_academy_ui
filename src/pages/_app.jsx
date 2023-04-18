import { useEffect } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { appStore } from '@/store'
import { AppProvider } from '@/components/contexts'
import { LoaderProvider } from '@/components/contexts/loader'
import { MenuProvider } from '@/components/contexts/menu'
import { BasketProvider } from '@/components/contexts/basket'
import { OffersProvider } from '@/components/contexts/offers'
import '@fontsource/inter'
import '@/assets/scss/app.scss'
import 'react-perfect-scrollbar/dist/css/styles.css'
import 'react-notifications/lib/notifications.css'
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
        <LoaderProvider>
          <MenuProvider>
            <BasketProvider>
              <OffersProvider>
                <Head>
                  <meta charSet="UTF-8" />
                  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <link rel="icon" href="/favicon.ico" />
                </Head>
                <Component { ... pageProps } />
              </OffersProvider>
            </BasketProvider>
          </MenuProvider>
        </LoaderProvider>
      </AppProvider>
    </Provider>
  )

}

export default JavaApp
