import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Collapse } from 'react-collapse'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { svgData, svgDataMobile } from '@/data'
import UserwayLayout from '@/layouts/userway'
import Teacher from '@/components/Teacher.jsx'

const UserwayPage = () => {

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
  useEffect(() => {
    const last = document.createElement('div')
    last.classList.add('last_item')
    last.style.left = lastEl + 'px'
    const interval = setInterval(() => {
      if(refSvgBox.current) {
        clearInterval(interval)
        refSvgBox.current.append(last)
      }
    }, 1)
  }, [])

  return (
    <UserwayLayout>
      <Head>
        <title>Мой путь</title>
      </Head>
      
      <div className="wrap container home">
        <div className="pagetitle">
          <h1>Мой путь</h1>
          <button className="btn st4" type="button">Открыть все курсы за 50%</button>
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
                      {e.arrows && e.arrows.map(arrow => {
                        return arrow
                      })}
                    </div>
            })}
            </div>
          </PerfectScrollbar>
          <button onClick={ toggleCollapse } className={ collapse ? 'active boxshadow' : 'boxshadow' } type="button">
            <span className="h1">Курсы</span>
            <svg><use xlinkHref="/theme/sprite.svg#arrow"></use></svg>
          </button>
          <Collapse isOpened={ collapse }>
            <div className="mobiledata">
              <button className='btn' type="button">Открыть все курсы за 50%</button>
              <ul>
              {svgDataMobile.map((e, i) => {
                return <li key={ i }>
                        <span>{ e.main }</span>
                        <span className={!e.progress ? 'empty' : ''}>{ e.progress }</span>
                        <svg><use xlinkHref="/theme/sprite.svg#module_plus_solid"></use></svg>
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
              <li><Link href="/"><strong>SQL</strong></Link></li>
              <li><Link href="/">Проект Университет</Link></li>
              <li><span className="badge green">Принят</span></li>
            </ul>
            <ul className="item">
              <li><Link href="/"><strong>java core</strong></Link></li>
              <li><Link href="/">Проект Toyoya</Link></li>
              <li><Link href="/">Этап 2</Link></li>
              <li><span className="badge orange">В работе</span></li>
            </ul>
            <div className="h1">Модули</div>
            <ul className="item">
              <li><Link href="/"><strong>Типы данных в java</strong></Link></li>
              <li>
                <span className="progressbar orange">
                  <span><span style={{ width: '50%' }}></span></span>
                  <span>50%</span>
                </span>
              </li>
            </ul>
            <div className="h1">Последние лекции</div>
            <ul className="item block">
              <li className='padding nlp'>
                <Link href="/"><strong>Типы данных в java</strong></Link>
              </li>
              <li className='flex padding'>
                <Link href="/" className='offset'>Числа</Link>
                <svg><use xlinkHref="/theme/sprite.svg#module_check_round"></use></svg>
              </li>
              <li className='flex padding'>
                <Link href="/" className='offset'>Символы</Link>
                <svg><use xlinkHref="/theme/sprite.svg#module_check_round"></use></svg>
              </li>
              <li className='padding'><Link href="/" className='offset'>Этап 3</Link></li>
              <li className='padding'><span className="access">Этап 4</span></li>
            </ul>
          </div>
          <Teacher />
        </div>
      </div>
    </UserwayLayout>
  )

}

export default UserwayPage