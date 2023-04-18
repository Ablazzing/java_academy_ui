import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { appApi } from '@/repositories'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'
import { useLoader } from '@/components/contexts/loader'

const NotificationsPage = () => {
  
  const router = useRouter()
  const [ notify, setNotify ] = useState([])
  const { closeLoader } = useLoader()
  const loadPageData = async () => {
    appApi().notify.getCount()
    const response = await appApi().notify.getList()
    setNotify(response)
    closeLoader()
  }
  
  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title='Уведомления'>
      <div className="wrap container notify">
        <Topbar />
        <div className="pagetitle"><h1>Уведомления</h1></div>
        { notify.length && 
          <ul>
            {
              notify.map((e, i) => {
                return <li className={ !e.isRead ? 'new' : '' } key={ i }>
                  <div className="date">{ e.date }</div>
                  <div className="info">
                    <p>{ e.text }</p>
                    {e.url && e.text && 
                      <p><Link href={ e.url }>{ e.urlText }</Link></p>
                    }
                  </div>
                </li>
              })
            }
          </ul>
          || 
          <div className="empty">Уведомления отсутствуют</div>
        }
      </div>
    </AppLayout>
  )

}

export default NotificationsPage