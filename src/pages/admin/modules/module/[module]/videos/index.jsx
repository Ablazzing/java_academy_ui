import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminModuleVideosPage = () => {
  
  const router = useRouter()
  const { closeLoader } = useLoader()

  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Видео'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Видео</span>
          <Link className="btn st5 green" href="/admin/modules/module/1/videos/video">
            <svg className="admin"><use xlinkHref="/theme/sprite.svg#plus"></use></svg>
            <span>Добавить видео</span>
          </Link>
        </div>
        <ul className="table boxshadow videos">
          <li>
            <div className="item">Имя видео</div>
            <div className="item">
              <Link className="btn st5 green" href="/admin/modules/module/1/videos/video/1">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn st5" type="button">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </AppLayout>
  )

}

export default AdminModuleVideosPage