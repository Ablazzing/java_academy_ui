import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminProjectUpdatePage = () => {
  
  const router = useRouter()
  const [ open, setOpen ] = useState(false)
  const [ select, setSelect ] = useState('Модуль 1')
  const { closeLoader } = useLoader()
  const setData = (e) => {
    setSelect(e.target.value)
    setOpen(false)
  }

  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Редактирование проекта'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Редактирование проекта</span>
        </div>
        <form className="boxshadow" action="">
          <fieldset>
            <input type="text" placeholder="Русское название" />
          </fieldset>
          <fieldset>
            <input type="text" placeholder="Английское название" />
          </fieldset>
          <fieldset>
            <textarea name="" placeholder="Описание"></textarea>
          </fieldset>
          <fieldset className="selectbox">
            <button onClick={ () => setOpen(!open) } className={ open ? 'active' : '' } type="button">
              { select }
            </button>
            <ul className={ open ? 'open' : '' }>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Модуль 1" id="radio1" />
                <label htmlFor="radio1">Модуль 1</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Модуль 2" id="radio2" />
                <label htmlFor="radio2">Модуль 2</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Модуль 3" id="radio3" />
                <label htmlFor="radio3">Модуль 3</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Модуль 4" id="radio4" />
                <label htmlFor="radio4">Модуль 4</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Модуль 5" id="radio5" />
                <label htmlFor="radio5">Модуль 5</label>
              </li>
            </ul>
          </fieldset>
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
    </AppLayout>
  )

}

export default AdminProjectUpdatePage