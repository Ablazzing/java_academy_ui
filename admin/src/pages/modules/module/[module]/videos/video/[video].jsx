import { useEffect } from 'react'
import Head from 'next/head'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const ModuleVideoUpdatePage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Редактирование видео</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
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
          <button className="btn" type="submit">Отправить</button>
        </form>
      </div>
    </AdminLayout>
  )

}

export default ModuleVideoUpdatePage