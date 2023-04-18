import Head from 'next/head'
import { useApp } from '@/components/contexts'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Menu } from '@/components/menu'
import { Basket } from '@/components/basket'
import { Offers } from '@/components/offers'
import { Loader } from '@/components/loader'

export const AppLayout = ({ children, title='Java Academy', description='', keywords='' }) => {
  
  const { state } = useApp()
  
  return (
    <>
      <Head>
        <title>{ title }</title>
        { description && <meta name="description" content={ description } />}
        { keywords && <meta name="keywords" content={ keywords } /> }
      </Head>
      <main className={`layout ${ state.section }`}>
        { state.section !== 'auth' && <Header /> }
        { children }
        { state.section !== 'auth' && <Footer /> }
        <Menu />
        <Basket />
        <Offers />
      </main>
      <Loader />
    </>
  )

}
