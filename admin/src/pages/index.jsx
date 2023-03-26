import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'

const IndexPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Админ панель</title></Head>

      <div className="wrap container index">
        <ul className='mainbox'>
          <li><Link href="/projects">Проекты</Link></li>
          <li><Link href="/modules">Модули</Link></li>
          <li><Link href="/tests">Тесты</Link></li>
          <li><Link href="/solutions">Проверка решений</Link></li>
          <li><Link href="/notifications">Создать уведомление</Link></li>
          <li><Link href="/access">Открыть доступ к модулю</Link></li>
        </ul>
      </div>
    </AdminLayout>
  )

}

export default IndexPage