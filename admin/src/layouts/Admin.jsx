import HeaderComponent from '@/components/Header'

const AdminLayout = ({ children }) => {
  return (
    <main className="layout admin">
      <HeaderComponent />
      { children }
    </main>
  )
}

export default AdminLayout