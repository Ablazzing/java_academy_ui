import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminSolutionsPage = () => {
  
  const router = useRouter()
  const { setLoader } = useApp()

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Проверка решений'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Проверка решений</span>
        </div>
        <ul className="table boxshadow solutions">
          <li>
            <div className="item">Пользователь 1</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 1</div>
            <div className="item">
              <Link className="btn st5 green" href="/admin/solutions/1">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 2</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 2</div>
            <div className="item">
              <Link className="btn st5 green" href="/admin/solutions/2">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 3</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 3</div>
            <div className="item">
              <Link className="btn st5 green" href="/admin/solutions/3">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 4</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 4</div>
            <div className="item">
              <Link className="btn st5 green" href="/admin/solutions/4">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 5</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 5</div>
            <div className="item">
              <Link className="btn st5 green" href="/admin/solutions/5">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </AppLayout>
  )

}

export default AdminSolutionsPage