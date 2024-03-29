import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'

const AdminIndexPage = () => {
  
  const router = useRouter()
  const { closeLoader } = useLoader()

  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Админ панель'>
      <div className="wrap container index">
        <ul className='mainbox'>
          <li><Link href="/admin/projects">Проекты</Link></li>
          <li><Link href="/admin/modules">Модули</Link></li>
          <li><Link href="/admin/tests">Тесты</Link></li>
          <li><Link href="/admin/solutions">Проверка решений</Link></li>
          <li><Link href="/admin/notifications">Создать уведомление</Link></li>
          <li><Link href="/admin/access">Открыть доступ к модулю</Link></li>
        </ul>
      </div>
    </AppLayout>
  )

}

export default AdminIndexPage