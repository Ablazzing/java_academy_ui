import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { appApi } from '@/repositories'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminModulesPage = () => {
  
  const router = useRouter()
  const [ modules, setModules ] = useState([])
  const { closeLoader } = useLoader()

  const loadPageData = async () => {
    const response = await appApi().modules.getModules()
    if(response) setModules(response)
    closeLoader()
  }

  useEffect(() => {
    router.isReady && loadPageData()
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
        {modules.map((e, i) => {
          return <li key={ i }>
            <div className="item">{ e.russianName }</div>
            <div className="item">
              <Link className="btn st5 blue" href={`/admin/modules/module/${ e.name }/videos`}>
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn st5 green" href={`/admin/modules/module/${ e.name }`}>
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn st5" type="button">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
        })}
        </ul>
      </div>
    </AppLayout>
  )

}

export default AdminModulesPage