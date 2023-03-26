import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const ProjectStepsPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Шаги проекта</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Шаги проекта</span>
          <Link className="btn green" href="/projects/project/1/steps/step">
            <svg><use xlinkHref="/theme/img/sprite.svg#plus"></use></svg>
            <span>Добавить шаг</span>
          </Link>
        </div>
        <ul className="table boxshadow steps">
          <li>
            <div className="item">Имя шага 1</div>
            <div className="item">
              <Link className="btn green" href="/projects/project/1/steps/step/1">
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
            <div className="item">Имя шага 2</div>
            <div className="item">
              <Link className="btn green" href="/projects/project/1/steps/step/1">
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
            <div className="item">Имя шага 3</div>
            <div className="item">
              <Link className="btn green" href="/projects/project/1/steps/step/1">
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
            <div className="item">Имя шага 4</div>
            <div className="item">
              <Link className="btn green" href="/projects/project/1/steps/step/1">
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
            <div className="item">Имя шага 5</div>
            <div className="item">
              <Link className="btn green" href="/projects/project/1/steps/step/1">
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

export default ProjectStepsPage