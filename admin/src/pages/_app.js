import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Provider } from 'react-redux'
import store from '@/store/StoreIndex'
import LoaderComponent from '@/components/Loader'
import '@/assets/scss/app.scss'

const JavaAppAdmin = ({ Component, pageProps }) => {

  const router = useRouter()
  const [loaded, setLoaded] = useState(true)

  useEffect(() => {

    const html = document.documentElement.style
    const setWindowHeight = () => html.setProperty('--app-height', window.innerHeight + 'px')
    setWindowHeight()
    window.addEventListener('resize', () => setWindowHeight())
    
    //if(router.asPath != '/signin') router.push('/signin')

  }, [])
  
  return (
    <Provider store={ store }>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <LoaderComponent />
      { loaded && <Component { ...pageProps } /> }
      
    </Provider>
  )

}

export default JavaAppAdmin