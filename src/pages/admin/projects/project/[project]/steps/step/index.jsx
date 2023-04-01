import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminProjectStepCreatePage = () => {
  
  const router = useRouter()
  const [ list, setList ] = useState([''])
  const { setLoader } = useApp()
  const addItem = () => {
    const current = JSON.parse(JSON.stringify(list))
    current.push('')
    setList(current)
  }

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Создание шага'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
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
            <button onClick={ addItem } className="btn st5 green" type="button">
              <svg className="admin"><use xlinkHref="/theme/sprite.svg#plus"></use></svg>
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
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
    </AppLayout>
  )

}

export default AdminProjectStepCreatePage