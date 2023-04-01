import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminModuleUpdatePage = () => {
  
  const router = useRouter()
  const [ radio, setRadio ] = useState(0)
  const { setLoader } = useApp()

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Редактирование модуля'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
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
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
    </AppLayout>
  )

}

export default AdminModuleUpdatePage