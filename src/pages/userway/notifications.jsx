import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { appApi } from '@/repositories'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'

const NotificationsPage = () => {
  
  const router = useRouter()
  const { setLoader } = useApp()
  const loadPageData = async () => {
    const response = await appApi().notify.getList()
    console.log(response)
    setLoader(false)
  }
  
  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title='Уведомления'>
      <div className="wrap container notify">
        <Topbar />
        <div className="pagetitle"><h1>Уведомления</h1></div>
        <ul>
          <li className='new'>
            <div className="date">10.01.2023</div>
            <div className="info">
              <p>Проект Тоyota (Этап 1 ) принят</p>
            </div>
          </li>
          <li>
            <div className="date">09.01.2023</div>
            <div className="info">
              <p>Проект Тоyota (Этап 2) отклонен.</p>
              <p><Link href="/userway">Посмотреть комментарий к проекту</Link></p>
            </div>
          </li>
          <li>
            <div className="date">09.01.2023</div>
            <div className="info">
              <p>Вам написали комментарий к теме Java / Булево. </p>
              <p><Link href="/userway">Посмотреть комментарий</Link></p>
            </div>
          </li>
          <li>
            <div className="date">09.01.2023</div>
            <div className="info">
              <p>Уведомляем вас, что изменились правила пользования сервисом. </p>
              <p><Link href="/userway">Подробнее</Link></p>
            </div>
          </li>
        </ul>
      </div>
    </AppLayout>
  )

}

export default NotificationsPage