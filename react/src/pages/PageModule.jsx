import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import TopBar from '../components/TopBar'
import Icon from '../components/Icon'
import Teacher from '../components/Teacher'

const PageModule = () => {
  const [collapse, setCollapse] = useState(false)
  const toggleCollapse = () => setCollapse(!collapse)
  document.title = 'Module'
  return (
    <main className="container wrap module">
      <TopBar back="Назад" />
      <div className="flexcontent">
        <div className="main">
          <div className="pagetitle">
            <h1>Модуль SQL</h1>
            <span className="progressbar orange">
              <span><span style={{ width: '50%' }}></span></span>
              <span>50%</span>
            </span>
          </div>
          <div className="info">
            <button onClick={ toggleCollapse } className={ collapse ? 'active boxshadow' : 'boxshadow' } type="button">
              <Icon name="module_check_round" />
              <span>Просмотрено 1</span>
              <Icon name="arrow" />
            </button>
            <Collapse isOpened={ collapse }>
              <div className="boxshadow">
                <ul className="items">
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
            </Collapse>
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