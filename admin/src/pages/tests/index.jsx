import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const TestsPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Тесты</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Тесты</span>
          <Link className="btn green" href="/tests/test">
            <svg><use xlinkHref="/theme/img/sprite.svg#plus"></use></svg>
            <span>Добавить тест</span>
          </Link>
        </div>
        <ul className="table boxshadow tests">
          <li>
            <div className="item">Имя модуля 1</div>
            <div className="item">
              <Link className="btn green" href="/tests/test/1">
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
              <Link className="btn green" href="/tests/test/2">
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
              <Link className="btn green" href="/tests/test/3">
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
              <Link className="btn green" href="/tests/test/4">
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
              <Link className="btn green" href="/tests/test/5">
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

export default TestsPage