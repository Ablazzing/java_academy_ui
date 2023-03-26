import { useEffect } from 'react'
import Head from 'next/head'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const NotificationsPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Создание уведомления</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Создание уведомления</span>
        </div>
        <form className="boxshadow" action="">
          <fieldset>
            <textarea name="" placeholder="Текст уведомления"></textarea>
          </fieldset>
          <button className="btn" type="submit">Отправить</button>
        </form>
      </div>
    </AdminLayout>
  )

}

export default NotificationsPage