import { useEffect, useState } from 'react'
import Head from 'next/head'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const ModuleUpdatePage = () => {

  const [radio, setRadio] = useState(0)

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Редактирование модуля</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Редактирование модуля</span>
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
          <fieldset>
            <input type="text" placeholder="Порядковый номер" />
          </fieldset>
          <fieldset className="flexbox">
            <input type="text" placeholder="Позиция по оси x" />
            <input type="text" placeholder="Позиция по оси y" />
          </fieldset>
          <fieldset className="switchbox">
            <div className="label">Бесплатный</div>
            <ul>
              <li>
                <input type="radio" name="radio" id="radio1" value="0" checked/>
                <label onClick={ () => setRadio(0) } htmlFor="radio1">Да</label>
              </li>
              <li>
                <input type="radio" name="radio" id="radio2" value="1"/>
                <label onClick={ () => setRadio(1) } htmlFor="radio2">Нет</label>
              </li>
            </ul>
          </fieldset>
          {
            Number(radio) && 
            <fieldset>
              <input type="text" placeholder="Цена" />
            </fieldset> || ''
          }
          <button className="btn" type="submit">Отправить</button>
        </form>
      </div>
    </AdminLayout>
  )

}

export default ModuleUpdatePage