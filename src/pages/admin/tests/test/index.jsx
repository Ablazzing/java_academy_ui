import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminTestCreatePage = () => {
  
  const router = useRouter()
  const [ open1, setOpen1 ] = useState(false)
  const [ open2, setOpen2 ] = useState(false)
  const [ select1, setSelect1 ] = useState('Модуль 1')
  const [ select2, setSelect2 ] = useState('Верный ответ 1')
  const { setLoader } = useApp()
  const setData1 = (e) => {
    setSelect1(e.target.value)
    setOpen1(false)
  }
  const setData2 = (e) => {
    setSelect2(e.target.value)
    setOpen2(false)
  }

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Создание теста'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Создание теста</span>
        </div>
        <form className="boxshadow" action="">
          <fieldset className="selectbox">
            <button onClick={ () => setOpen1(!open1) } className={ open1 ? 'active' : '' } type="button">
              { select1 }
            </button>
            <ul className={ open1 ? 'open' : '' }>
              <li>
                <input onChange={ setData1 } type="radio" name="radio" value="Модуль 1" id="radio1" />
                <label htmlFor="radio1">Модуль 1</label>
              </li>
              <li>
                <input onChange={ setData1 } type="radio" name="radio" value="Модуль 2" id="radio2" />
                <label htmlFor="radio2">Модуль 2</label>
              </li>
              <li>
                <input onChange={ setData1 } type="radio" name="radio" value="Модуль 3" id="radio3" />
                <label htmlFor="radio3">Модуль 3</label>
              </li>
              <li>
                <input onChange={ setData1 } type="radio" name="radio" value="Модуль 4" id="radio4" />
                <label htmlFor="radio4">Модуль 4</label>
              </li>
              <li>
                <input onChange={ setData1 } type="radio" name="radio" value="Модуль 5" id="radio5" />
                <label htmlFor="radio5">Модуль 5</label>
              </li>
            </ul>
          </fieldset>
          <fieldset>
            <textarea name="" placeholder="Вопрос"></textarea>
          </fieldset>
          <fieldset className="answerbox" >
            <textarea name="" placeholder="Ответ 1"></textarea>
            <textarea name="" placeholder="Ответ 2"></textarea>
            <textarea name="" placeholder="Ответ 3"></textarea>
            <textarea name="" placeholder="Ответ 4"></textarea>
          </fieldset>
          <fieldset className="selectbox">
            <button onClick={ () => setOpen2(!open2) } className={ open2 ? 'active' : '' } type="button">
              { select2 }
            </button>
            <ul className={ open2 ? 'open' : '' }>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 1" id="radio21" />
                <label htmlFor="radio21">Верный ответ 1</label>
              </li>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 2" id="radio22" />
                <label htmlFor="radio22">Верный ответ 2</label>
              </li>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 3" id="radio23" />
                <label htmlFor="radio23">Верный ответ 3</label>
              </li>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 4" id="radio24" />
                <label htmlFor="radio24">Верный ответ 4</label>
              </li>
            </ul>
          </fieldset>
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
    </AppLayout>
  )

}

export default AdminTestCreatePage