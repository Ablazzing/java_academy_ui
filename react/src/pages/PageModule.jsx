import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import Icon from "../components/Icon"
import Teacher from "../components/Teacher"

const PageModule = () => {
  const refTab = useRef(null)
  const [tab, setTab] = useState({
    active: '',
    height: '0',
  })
  const toggleTab = () => {
    setTab({
      active: !tab.active ? 'active' : '',
      height: !tab.active ? `${refTab.current.scrollHeight}px` : 0
    })
  }
  return (
    <main className="container wrap module">
      <NavLink to="/" className="back">
        <Icon name="arrow" />
        <span>Назад</span>
      </NavLink>
      <div className="content">
        <div className="main">
          <div className="pagetitle">
            <span>Модуль SQL</span>
            <span className="progress">
              <span><span style={{ width: '50%' }}></span></span>
              <span>50%</span>
            </span>
          </div>
          <div className="tab">
            <button onClick={ toggleTab } className={tab.active ? 'active toggle' : 'toggle'} type="button">
              <Icon name="module_check_round" />
              <span>Просмотрено 1</span>
              <Icon name="arrow" />
            </button>
            <div style={{ maxHeight: `${tab.height}` }} ref={ refTab } className="tabcontent">
              <ul className="list">
                <li><NavLink to="">Лекция 2</NavLink></li>
                <li>
                  <NavLink to="">Лекция 3</NavLink>
                  <ul>
                    <li><NavLink to="">Лекция 3.1</NavLink></li>
                    <li><NavLink to="">Лекция 3.2</NavLink></li>
                    <li><NavLink to="">Лекция 3.3</NavLink></li>
                  </ul>
                </li>
                <li><NavLink to="">Лекция 4</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="result">
            <div className="label">Итоговый тест</div>
            <button className="btn" type="button">Пройти</button>
          </div>
        </div>
        <Teacher />
      </div>
    </main>
  )
}

export default PageModule