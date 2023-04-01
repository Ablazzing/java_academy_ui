import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminNotificationsPage = () => {
  
  const router = useRouter()
  const { setLoader } = useApp()

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Создание уведомление'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Создание уведомление</span>
        </div>
        <form className="boxshadow" action="">
          <fieldset>
            <textarea name="" placeholder="Текст уведомления"></textarea>
          </fieldset>
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
    </AppLayout>
  )

}

export default AdminNotificationsPage