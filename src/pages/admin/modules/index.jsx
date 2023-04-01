import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminModulesPage = () => {
  
  const router = useRouter()
  const { setLoader } = useApp()

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Модули'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Модули</span>
          <Link className="btn st5 green" href="/admin/modules/module">
            <svg className="admin"><use xlinkHref="/theme/sprite.svg#plus"></use></svg>
            <span>Добавить модуль</span>
          </Link>
        </div>
        <ul className="table boxshadow modules">
          <li>
            <div className="item">Имя модуля 1</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/modules/module/1/videos">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn st5 green" href="/admin/modules/module/1">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn st5" type="button">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя модуля 2</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/modules/module/2/videos">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn st5 green" href="/admin/modules/module/2">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn st5" type="button">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя модуля 3</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/modules/module/3/videos">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn st5 green" href="/admin/modules/module/3">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn st5" type="button">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя модуля 4</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/modules/module/4/videos">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn st5 green" href="/admin/modules/module/4">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn st5" type="button">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя модуля 5</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/modules/module/5/videos">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn st5 green" href="/admin/modules/module/5">
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

export default AdminModulesPage