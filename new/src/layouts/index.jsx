import HeaderIndex from '@/components/HeaderIndex'
import FooterIndex from '@/components/FooterIndex'
import MobileMenu from '@/components/MobileMenu'

const IndexLayout = ({ children }) => {
  return (
    <main className="layout index">
      <HeaderIndex />
      { children }
      <FooterIndex />
      <MobileMenu />
    </main>
  )
}

export default IndexLayout