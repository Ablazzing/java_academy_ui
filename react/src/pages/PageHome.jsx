import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Collapse } from 'react-collapse'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { svgData, svgDataMobile } from '@/data'
import Icon from '../components/Icon'
import Teacher from '../components/Teacher'

const PageHome = () => {
  const [collapse, setCollapse] = useState(false)
  const toggleCollapse = () => setCollapse(!collapse)
  const refSvgBox = useRef(null)
  let lastEl = 0
  svgData.map(e => {
    const left = parseInt(e.styles.position.left)
    const width = parseInt(e.styles.position.width)
    const offset = left + width
    if(offset > lastEl) lastEl = offset
  })
  const last = document.createElement('div')
  last.classList.add('last_item')
  last.style.left = lastEl + 'px'
  const interval = setInterval(() => {
    if(refSvgBox.current) {
      clearInterval(interval)
      refSvgBox.current.append(last)
    }
  }, 1)
  document.title = 'Home'
  return (
    <main className="container wrap home">
      <div className="pagetitle">
        <h1>Мой путь</h1>
        <button className="btn" type="button">Открыть все курсы за 50%</button>
      </div>
      <div className="tab">
        <PerfectScrollbar className="svgbox">
          <div ref={ refSvgBox } className="box">
          {svgData.map((e, i) => {
            return <div style={ e.styles.position } key={ i } className="item">
                    <div style={ e.styles.main.outer } className="main">
                      <span style={ e.styles.main.inner }>{ e.main.label }</span>
                      { e.main.icon }
                    </div>
                    {e.progress && <div className="progress" style={ e.styles.progress.outer }>
                      <span style={ e.styles.progress.inner }>{ e.progress.label }</span>
                      { e.progress.icon }
                    </div>}
                    {e.arrows && e.arrows.map((arrow, id) => {
                      return arrow
                    })}
                  </div>
          })}
          </div>
        </PerfectScrollbar>
        <button onClick={ toggleCollapse } className={ collapse ? 'active boxshadow' : 'boxshadow' } type="button">
          <span className="h1">Курсы</span>
          <Icon name="arrow" />
        </button>
        <Collapse isOpened={ collapse }>
          <div className="mobiledata">
            <button className='btn' type="button">Открыть все курсы за 50%</button>
            <ul>
            {svgDataMobile.map((e, i) => {
              return <li key={ i }>
                      <span>{ e.main }</span>
                      <span className={!e.progress ? 'empty' : ''}>{ e.progress }</span>
                      <Icon name="module_plus_solid" />
                    </li>
            })}
            </ul>
          </div>
        </Collapse>
      </div>
      <div className="flexcontent">
        <div className="main boxshadow">
          <div className="h1">Проекты</div>
          <ul className="item">
            <li><NavLink to="/"><strong>SQL</strong></NavLink></li>
            <li><NavLink to="/">Проект Университет</NavLink></li>
            <li><span className="badge green">Принят</span></li>
          </ul>
          <ul className="item">
            <li><NavLink to="/"><strong>java core</strong></NavLink></li>
            <li><NavLink to="/">Проект Toyoya</NavLink></li>
            <li><NavLink to="/">Этап 2</NavLink></li>
            <li><span className="badge orange">В работе</span></li>
          </ul>
          <div className="h1">Модули</div>
          <ul className="item">
            <li><NavLink to="/"><strong>Типы данных в java</strong></NavLink></li>
            <li>
              <span className="progressbar orange">
                <span><span style={{ width: '50%' }}></span></span>
                <span>50%</span>
              </span>
            </li>
          </ul>
          <div className="h1">Последние лекции</div>
          <ul className="item block">
            <li className='padding nlp'><NavLink to="/"><strong>Типы данных в java</strong></NavLink></li>
            <li className='flex padding'>
              <NavLink to="/" className='offset'>Числа</NavLink>
              <Icon name="module_check_round" />
            </li>
            <li className='flex padding'>
              <NavLink to="/" className='offset'>Символы</NavLink>
              <Icon name="module_check_round" />
            </li>
            <li className='padding'><NavLink to="/" className='offset'>Этап 3</NavLink></li>
            <li className='padding'><span className="access">Этап 4</span></li>
          </ul>
        </div>
        <Teacher />
      </div>
    </main>
  )
}

export default PageHome