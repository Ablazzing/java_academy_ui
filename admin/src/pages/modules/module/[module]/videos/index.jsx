import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const ModuleVideosPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Видео</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Видео</span>
          <Link className="btn green" href="/modules/module/1/videos/video">
            <svg><use xlinkHref="/theme/img/sprite.svg#plus"></use></svg>
            <span>Добавить видео</span>
          </Link>
        </div>
        <ul className="table boxshadow videos">
          <li>
            <div className="item">Имя видео</div>
            <div className="item">
              <Link className="btn green" href="/modules/module/1/videos/video/1">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn" type="button">
                <svg><use xlinkHref="/theme/img/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </AdminLayout>
  )

}

export default ModuleVideosPage