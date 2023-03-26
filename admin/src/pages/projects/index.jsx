import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const ProjectsPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Проекты</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Проекты</span>
          <Link className="btn green" href="/projects/project">
            <svg><use xlinkHref="/theme/img/sprite.svg#plus"></use></svg>
            <span>Добавить проект</span>
          </Link>
        </div>
        <ul className="table boxshadow projects">
          <li>
            <div className="item">Имя проекта 1</div>
            <div className="item">
              <Link className="btn blue" href="/projects/project/1/steps">
                <svg><use xlinkHref="/theme/img/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn green" href="/projects/project/1">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn" type="button">
                <svg><use xlinkHref="/theme/img/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя проекта 2</div>
            <div className="item">
              <Link className="btn blue" href="/projects/project/2/steps">
                <svg><use xlinkHref="/theme/img/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn green" href="/projects/project/2">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn" type="button">
                <svg><use xlinkHref="/theme/img/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя проекта 3</div>
            <div className="item">
              <Link className="btn blue" href="/projects/project/3/steps">
                <svg><use xlinkHref="/theme/img/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn green" href="/projects/project/3">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn" type="button">
                <svg><use xlinkHref="/theme/img/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя проекта 4</div>
            <div className="item">
              <Link className="btn blue" href="/projects/project/4/steps">
                <svg><use xlinkHref="/theme/img/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn green" href="/projects/project/4">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Редактировать</span>
              </Link>
              <button className="btn" type="button">
                <svg><use xlinkHref="/theme/img/sprite.svg#trash"></use></svg>
                <span>Удалить</span>
              </button>
            </div>
          </li>
          <li>
            <div className="item">Имя проекта 5</div>
            <div className="item">
              <Link className="btn blue" href="/projects/project/5/steps">
                <svg><use xlinkHref="/theme/img/sprite.svg#step"></use></svg>
                <span>Шаги проекта</span>
              </Link>
              <Link className="btn green" href="/projects/project/5">
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

export default ProjectsPage