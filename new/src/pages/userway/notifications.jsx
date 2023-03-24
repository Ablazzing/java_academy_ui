import Head from 'next/head'
import Link from 'next/link'
import UserwayLayout from '@/layouts/userway'
import Topbar from '@/components/Topbar'
import { useEffect } from 'react'
import { dispatchEvent, removeEvent } from '@/utils'
import ProfileRepository from '@/repositories/profile'

const NotificationsPage = () => {

  const loadPageData = async () => {
    const response = await ProfileRepository.getNotificationsList()
  }

  useEffect(() => {
    loadPageData()
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <UserwayLayout>
      <Head>
        <title>Notifications</title>
      </Head>
      
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
    </UserwayLayout>
  )

}

export default NotificationsPage