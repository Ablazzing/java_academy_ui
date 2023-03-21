import HeaderDefault from '@/components/HeaderUserway'
import FooterDefault from '@/components/FooterUserway'
import Basket from '@/components/Basket'

const UserwayLayout = ({ children }) => {
  return (
    <main className="layout userway">
      <HeaderDefault />
      { children }
      <FooterDefault />
      <Basket />
    </main>
  )
}

export default UserwayLayout