import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Collapse } from 'react-collapse'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useSelector } from 'react-redux'
import { dispatchEvent, removeEvent } from '@/utils'
import WayRepository from '@/repositories/way'
import UserwayLayout from '@/layouts/userway'
import Teacher from '@/components/Teacher.jsx'
import { svgDataMobile } from '@/data'

const UserwayPage = () => {

  const [collapse, setCollapse] = useState(false)
  const wayData = useSelector(state => state.way.wayData)
  const wayArrows = useSelector(state => state.way.wayArrows)
  const wayStatuses = useSelector(state => state.way.wayStatuses)
  const loadUserWay = async () => {
    if(!wayData.length) await WayRepository.getWay()
    dispatchEvent('stopLoader')
  }

  useEffect(() => {
    loadUserWay()
    return () => removeEvent('stopLoader')
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
            <div className="box">
              {wayData.map((e, i) => {
                return <div 
                          style={ e.position } 
                          key={ i } 
                          className={ `item 
                            ${ e.isOpen ? 'open' : '' }
                            ${ e.isOpen && (parseInt(e.percentage) === 100) ? 'ready' : '' }
                          ` }>
                          <div className="main">
                            { 
                              e.isOpen &&
                              <Link href={`/userway/module/${ e.name }`}>
                                <span>{ e.russianName }</span>
                                {
                                  parseInt(e.percentage) === 100 && 
                                  <svg className="ready">
                                    <use xlinkHref="/theme/sprite.svg#module_check" />
                                  </svg>
                                }
                              </Link> || 
                              <>
                                <span>{ e.russianName }</span>
                                <button type="button">
                                  <svg className="module_plus">
                                    <use xlinkHref="/theme/sprite.svg#module_plus" />
                                  </svg>
                                </button>
                              </>
                            }
                          </div>
                          { e.userProject && 
                            <Link href={`/userway/module/${ e.name }/project`} className="progress">
                              <span>{ e.userProject.projectInfo.russianName }</span>
                              {(
                                e.userProject.projectStatus === 'В работе' && 
                                <div className="badge orange">В работе</div>
                              ) || (
                                e.userProject.projectStatus === 'В работе2' && 
                                <div className="badge blue">В работе2</div>
                              )}
                            </Link>
                          }
                        </div>
              })}
              <svg className="arrows" xmlns="http://www.w3.org/2000/svg" fill="none">
              {wayArrows.map((e, i) => {
                return <g key={ i }>
                  <path d={`M${e.coords.map((el, id) => {
                    return `${id ? 'L' : ''}${el.x} ${el.y}`
                  })}`} stroke="currentColor" strokeWidth="2"  />
                  <image transform={`
                    rotate(
                      ${e.direction == 'top' ? -90 : e.direction == 'bottom' ? 90 : e.direction == 'left' ? 180 : 0}
                      ${e.coords[e.coords.length - 1].x} 
                      ${e.coords[e.coords.length - 1].y}
                    )
                    translate(${e.coords[e.coords.length - 1].x - 12} ${e.coords[e.coords.length - 1].y - 10})
                  `} xlinkHref="/theme/img/arrow_dark.svg" width="20" height="20" />
                </g>
              })}
              </svg>
            </div>
          </PerfectScrollbar>
          <button onClick={ () => setCollapse(!collapse) } className={ `boxshadow ${ collapse ? 'active' : '' }` } type="button">
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
                        <span className={ !e.progress ? 'empty' : '' }>{ e.progress }</span>
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
            {wayStatuses.userModulesOpen && wayStatuses.userModulesOpen.map((e, i) => {
              return <ul className="item" key={ i }>
                      <li>
                        <Link href={`/userway/module/${ e.name }`}>
                          <strong>{ e.russianName }</strong>
                        </Link>
                      </li>
                      { e.userProject && <>
                        <li>
                          <Link href={`/userway/module/${ e.name }/project`}>
                            { e.userProject.projectInfo.russianName }
                          </Link>
                        </li>
                        {
                          e.userProject.steps.length && <>
                          <li>
                            <Link href={`/userway/module/${ e.name }/project/step/${e.userProject.steps[e.userProject.steps.length - 1].step}`}>
                              {`Этап ${e.userProject.steps[e.userProject.steps.length - 1].step}`}
                            </Link>
                          </li>
                          </>
                        }
                        <li>
                          {(
                            e.userProject.projectStatus === 'В работе' && 
                            <div className="badge orange">В работе</div>
                          ) || (
                            e.userProject.projectStatus === 'В работе2' && 
                            <div className="badge blue">В работе2</div>
                          )}
                        </li>
                      </>}
                    </ul>
            })}
            <div className="h1">Модули</div>
            {wayStatuses.userModulesOpen && wayStatuses.userModulesOpen.map((e, i) => {
              return <ul className="item" key={ i }>
                      <li>
                        <Link href={`/userway/module/${ e.name }`}>
                          <strong>{ e.russianName }</strong>
                        </Link>
                      </li>
                      <li>
                        <span className="progressbar orange">
                          <span><span style={{ width: e.percentage }}></span></span>
                          <span>{ e.percentage }</span>
                        </span>
                      </li>
                    </ul>
            })}
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
