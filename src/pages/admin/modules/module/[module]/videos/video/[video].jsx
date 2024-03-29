import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminModuleVideoUpdatePage = () => {
  
  const router = useRouter()
  const { closeLoader } = useLoader()

  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Редактирование видео'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Редактирование видео</span>
        </div>
        <form className="boxshadow" action="">
          <fieldset>
            <input type="text" placeholder="Русское название" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Английское название" />
          </fieldset>
          <fieldset>
            <textarea name="" placeholder="Описание"></textarea>
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Порядковый номер" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="URL" />
          </fieldset>
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
    </AppLayout>
  )

}

export default AdminModuleVideoUpdatePage