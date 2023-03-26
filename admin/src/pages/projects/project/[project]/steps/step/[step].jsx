import { useEffect, useState } from 'react'
import Head from 'next/head'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const ProjectStepUpdatePage = () => {

  const [list, setList] = useState([''])
  const addItem = () => {
    const current = JSON.parse(JSON.stringify(list))
    current.push('')
    setList(current)
  }

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Создание шага</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Создание шага</span>
        </div>
        <form className="boxshadow" action="">
          <fieldset>
            <input type="text" placeholder="Номер шага" />
          </fieldset>
          <fieldset>
            <textarea name="" placeholder="Описание"></textarea>
          </fieldset>
          <div className="title">
            <span>Требования</span>
            <button onClick={ addItem } className="btn" type="button">
              <svg><use xlinkHref="/theme/img/sprite.svg#plus"></use></svg>
              <span>Добавить</span>
            </button>
          </div>
          <ul className="list">
          {list.map((e, i) => {
            return <li key={ i }>
                      <fieldset>
                        <input type="text" placeholder="Требование" />
                        <input type="text" placeholder="Подсказка" />
                      </fieldset>
                    </li>
          })}
          </ul>
          <button className="btn" type="submit">Отправить</button>
        </form>
      </div>
    </AdminLayout>
  )

}

export default ProjectStepUpdatePage