import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const SolutionsPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    
    <AdminLayout>
      <Head><title>Проверка решений</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Проверка решений</span>
        </div>
        <ul className="table boxshadow solutions">
          <li>
            <div className="item">Пользователь 1</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 1</div>
            <div className="item">
              <Link className="btn green" href="/solutions/1">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 2</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 2</div>
            <div className="item">
              <Link className="btn green" href="/solutions/2">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 3</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 3</div>
            <div className="item">
              <Link className="btn green" href="/solutions/3">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 4</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 4</div>
            <div className="item">
              <Link className="btn green" href="/solutions/4">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">Пользователь 5</div>
            <div className="item">Имя проекта</div>
            <div className="item">Шаг 5</div>
            <div className="item">
              <Link className="btn green" href="/solutions/5">
                <svg><use xlinkHref="/theme/img/sprite.svg#pencil"></use></svg>
                <span>Проверить</span>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </AdminLayout>
  )

}

export default SolutionsPage