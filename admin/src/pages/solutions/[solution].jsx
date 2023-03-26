import { useEffect, useState } from 'react'
import Head from 'next/head'
import { dispatchEvent, removeEvent } from '@/utils'
import AdminLayout from '@/layouts/Admin'
import { BreadCrumbs } from '@/components/BreadCrumbs'

const SolutionUpdatePage = () => {

  const [open, setOpen] = useState(false)
  const [select, setSelect] = useState('Статус 1')
  const setData = (e) => {
    setSelect(e.target.value)
    setOpen(false)
  }

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AdminLayout>
      <Head><title>Проверка решения</title></Head>
      
      <div className="wrap container">
        <BreadCrumbs />
        <div className="pagetitle">
          <span>Проверка решения</span>
        </div>
        <form className="boxshadow" action="">
          <div className="desc">Описание шага</div>
          <a href="" className="git">ссылка git</a>
          <ul className="comments">
            <li>
              <div className="date">10.10.2023</div>
              <div className="comment">Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий Комментарий </div>
            </li>
            <li>
              <div className="date">10.10.2023</div>
              <div className="comment">Комментарий</div>
            </li>
            <li>
              <div className="date">10.10.2023</div>
              <div className="comment">Комментарий</div>
            </li>
          </ul>
          <fieldset>
            <textarea name="" placeholder="Комментарий"></textarea>
          </fieldset>
          <fieldset className="selectbox">
            <button onClick={ () => setOpen(!open) } className={ open ? 'active' : '' } type="button">
              { select }
            </button>
            <ul className={ open ? 'open' : '' }>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Статус 1" id="radio1" />
                <label htmlFor="radio1">Статус 1</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Статус 2" id="radio2" />
                <label htmlFor="radio2">Статус 2</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Статус 3" id="radio3" />
                <label htmlFor="radio3">Статус 3</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Статус 4" id="radio4" />
                <label htmlFor="radio4">Статус 4</label>
              </li>
              <li>
                <input onChange={ setData } type="radio" name="radio" value="Статус 5" id="radio5" />
                <label htmlFor="radio5">Статус 5</label>
              </li>
            </ul>
          </fieldset>
          <button className="btn" type="submit">Отправить</button>
        </form>
      </div>
    </AdminLayout>
  )

}

export default SolutionUpdatePage