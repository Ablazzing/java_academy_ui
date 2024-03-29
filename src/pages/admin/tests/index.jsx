import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { appApi } from '@/repositories'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminTestsPage = () => {
  
  const router = useRouter()
  const { closeLoader } = useLoader()

  const loadPageData = async () => {
    //const response = await appApi().modules.getModules()
    //console.log(response)
    closeLoader()
  }

  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title='Тесты'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Тесты</span>
          <Link className="btn st5 green" href="/admin/tests/test">
            <svg className="admin"><use xlinkHref="/theme/sprite.svg#plus"></use></svg>
            <span>Добавить тест</span>
          </Link>
        </div>
        <ul className="table boxshadow tests">
          <li>
            <div className="item">Имя модуля 1</div>
            <div className="item">
              <Link className="btn st5 green" href="/admin/tests/test/1">
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
              <Link className="btn st5 green" href="/admin/tests/test/2">
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
              <Link className="btn st5 green" href="/admin/tests/test/3">
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
              <Link className="btn st5 green" href="/admin/tests/test/4">
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
              <Link className="btn st5 green" href="/admin/tests/test/5">
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

export default AdminTestsPage