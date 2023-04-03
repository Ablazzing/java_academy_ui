import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { appApi } from '@/repositories'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminProjectsPage = () => {
  
  const router = useRouter()
  const [ projects, setProjects ] = useState([])
  const { closeLoader } = useLoader()

  const loadPageData = async () => {
    const response = await appApi().projects.getProjects({
      slug: router.query.module
    })
    console.log(response)
    if(response) setProjects(response)
    closeLoader()
  }

  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title='Проекты'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Проекты</span>
          <Link className="btn st5 green" href="/admin/projects/project">
            <svg className="admin"><use xlinkHref="/theme/sprite.svg#plus"></use></svg>
            <span>Добавить проект</span>
          </Link>
        </div>
        <ul className="table boxshadow projects">
          <li>
            <div className="item">Имя проекта 1</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/projects/project/1/steps">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn st5 green" href="/admin/projects/project/1">
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
            <div className="item">Имя проекта 2</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/projects/project/2/steps">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn st5 green" href="/admin/projects/project/2">
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
            <div className="item">Имя проекта 3</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/projects/project/3/steps">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn st5 green" href="/admin/projects/project/3">
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
            <div className="item">Имя проекта 4</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/projects/project/4/steps">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn st5 green" href="/admin/projects/project/4">
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
            <div className="item">Имя проекта 5</div>
            <div className="item">
              <Link className="btn st5 blue" href="/admin/projects/project/5/steps">
                <svg className="admin"><use xlinkHref="/theme/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn st5 green" href="/admin/projects/project/5">
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

export default AdminProjectsPage