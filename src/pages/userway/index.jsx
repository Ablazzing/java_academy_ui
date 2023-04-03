import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Collapse } from 'react-collapse'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { appApi } from '@/repositories'
import { moduleStatuses } from '@/utils'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Teacher } from '@/components/teacher'

const UserwayHomePage = () => {
  
  const router = useRouter()
  const [ collapse, setCollapse ] = useState(false)
  const [ modules, setModules ] = useState([])
  const [ arrows, setArrows ] = useState([])
  const [ statuses, setStatuses ] = useState({})
  const { closeLoader } = useLoader()
  const loadPageData = async () => {
    const modulesData = await appApi().modules.getModules()
    if(modulesData) setModules(modulesData)
    const arrowsData = await appApi().arrows.getArrows()
    if(arrowsData) setArrows(arrowsData)
    const statusesData = await appApi().modules.getStatuses()
    if(statusesData) setStatuses(statusesData)
    setTimeout(() => closeLoader(), 350)
  }

  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title='Мой путь'>
      <div className="wrap container home">
        <div className="pagetitle">
          <h1>Мой путь</h1>
          <button className="btn st4" type="button">Открыть все курсы за 50%</button>
        </div>
        <div className="tab">
          <PerfectScrollbar className="svgbox">
            <div className="box">
              {modules.map((e, i) => {
                return <div style={ e.position } key={ i } className={ `item ${ e.isOpen ? 'open' : '' } ${ e.isOpen && (parseInt(e.percentage) === 100) ? 'ready' : '' } ` }>
                  <div className="main">
                    { e.isOpen &&
                      <Link href={`/userway/module/${ e.name }`}>
                        <span>{ e.russianName }</span>
                        {
                          parseInt(e.percentage) === 100 && 
                          <svg className="ready">
                            <use xlinkHref="/theme/sprite.svg#module_check" />
                          </svg>
                        }
                      </Link> 
                      || 
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
                      { moduleStatuses[e.userProject.projectStatus] && 
                        <div className={`badge ${ moduleStatuses[e.userProject.projectStatus] }`}>
                          { e.userProject.projectStatus }
                        </div>
                      }
                    </Link>
                  }
                </div>
              })}
              <svg className="arrows" xmlns="http://www.w3.org/2000/svg" fill="none">
              {arrows.map((e, i) => {
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
                  `} xlinkHref="/theme/arrow_dark.svg" width="20" height="20" />
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
              {modules.map((e, i) => {
                return <li key={ i }>
                  <span>{ e.russianName }</span>
                  <span className={ !e.userProject ? 'empty' : '' }>{ e.userProject?.projectInfo?.russianName }</span>
                  { !e.isOpen &&
                    <svg><use xlinkHref="/theme/sprite.svg#module_plus_solid"></use></svg>
                  }
                </li>
              })}
              </ul>
            </div>
          </Collapse>
        </div>
        <div className="flexcontent">
          <div className="main boxshadow">
            <div className="h1">Проекты</div>
            {statuses.userModulesOpen && statuses.userModulesOpen.map((e, i) => {
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
                  { e.userProject.steps && e.userProject.steps.length && 
                    <>
                      <li>
                        <Link href={`/userway/module/${ e.name }/project/step/${e.userProject.steps[e.userProject.steps.length - 1].step}`}>
                          {`Этап ${e.userProject.steps[e.userProject.steps.length - 1].step}`}
                        </Link>
                      </li>
                    </> 
                  }
                  <li>
                    { moduleStatuses[e.userProject.projectStatus] && 
                      <div className={`badge ${ moduleStatuses[e.userProject.projectStatus] }`}>
                        { e.userProject.projectStatus }
                      </div>
                    }
                  </li>
                </>}
              </ul>
            })}
            <div className="h1">Модули</div>
            {statuses.userModulesOpen && statuses.userModulesOpen.map((e, i) => {
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
    </AppLayout>
  )

}

export default UserwayHomePage
