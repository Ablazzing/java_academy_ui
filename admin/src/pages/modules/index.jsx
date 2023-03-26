import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const ModulesPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Модули</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Модули</span>
          <Link className="btn green" href="/modules/module">
            <svg><use xlinkHref="/theme/img/sprite.svg#plus"></use></svg>
            <span>Добавить модуль</span>
          </Link>
        </div>
        <ul className="table boxshadow modules">
          <li>
            <div className="item">Имя модуля 1</div>
            <div className="item">
              <Link className="btn blue" href="/modules/module/1/videos">
                <svg><use xlinkHref="/theme/img/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn green" href="/modules/module/1">
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
            <div className="item">Имя модуля 2</div>
            <div className="item">
              <Link className="btn blue" href="/modules/module/2/videos">
                <svg><use xlinkHref="/theme/img/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn green" href="/modules/module/2">
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
            <div className="item">Имя модуля 3</div>
            <div className="item">
              <Link className="btn blue" href="/modules/module/3/videos">
                <svg><use xlinkHref="/theme/img/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn green" href="/modules/module/3">
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
            <div className="item">Имя модуля 4</div>
            <div className="item">
              <Link className="btn blue" href="/modules/module/4/videos">
                <svg><use xlinkHref="/theme/img/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn green" href="/modules/module/4">
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
            <div className="item">Имя модуля 5</div>
            <div className="item">
              <Link className="btn blue" href="/modules/module/5/videos">
                <svg><use xlinkHref="/theme/img/sprite.svg#video"></use></svg>
                <span>Видео</span>
              </Link>
              <Link className="btn green" href="/modules/module/5">
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

export default ModulesPage