import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Collapse } from 'react-collapse'
import { appApi } from '@/repositories'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'
import { Teacher } from '@/components/teacher'

const PageModule = () => {
  
  const router = useRouter()
  const [ collapse, setCollapse ] = useState({})
  const [ error, setError ] = useState(false)
  const [ module, setModule ] = useState({})
  const { closeLoader } = useLoader()
  const toggleCollapse = (i) => setCollapse({... collapse, ... {[i]: !collapse[i]}})
  const loadPageData = async () => {
    const response = await appApi().modules.getModule({
      moduleName: router.query.module
    })
    if(response) {
      const collapses = {}
      response.videosGroup.map((_, i) => {
        collapses[i] = false
      })
      setCollapse(collapses)
      setModule(response)
    } else {
      setError(true)
    }
    closeLoader()
  }
  
  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title={ error ? 'Модуль не найден' : `Модуль ${ module.russianName }` }>
      <div className="wrap container module">
        <Topbar />
        {!error && 
          <div className="flexcontent">
            <div className="main">
              <div className="pagetitle">
                <h1>{ error ? 'Модуль не найден' : `Модуль ${ module.russianName }` }</h1>
                <span className="progressbar orange">
                  <span><span style={{ width: `${module.percentage}` }}></span></span>
                  <span>{ `${module.percentage}` }</span>
                </span>
              </div>
              {
                module?.videosGroup?.map((e, i) => {
                  return <div key={ i } className="info">
                    <button onClick={ () => toggleCollapse(i) } className={ collapse[i] ? 'active boxshadow' : 'boxshadow' } type="button">
                      {e.isAllWatched && 
                        <svg className="module_check_round">
                          <use xlinkHref="/theme/sprite.svg#module_check_round"></use>
                        </svg>
                      }
                      <span>{ e.groupName }</span>
                      <svg className="arrow"><use xlinkHref="/theme/sprite.svg#arrow"></use></svg>
                    </button>
                    <Collapse isOpened={ collapse[i] }>
                      <div className="boxshadow">
                        <ul className="items" key={ i }>
                          {e.videos.map((video, id) => {
                            return <li key={ id }>
                              <Link href={`/userway/module/${ module.name }/lection/${ video.video.name }`}>
                                {video.isWatched && 
                                  <svg className="module_check_round">
                                    <use xlinkHref="/theme/sprite.svg#module_check_round"></use>
                                  </svg>
                                }
                                { video.video.russianName }
                              </Link>
                            </li>
                          })}
                        </ul>
                      </div>
                    </Collapse>
                  </div>
                })
              }
              <div className="result">
                <div className="label">Итоговый тест</div>
                <Link href={`/userway/module/${ module.name }/test`} className="btn st4">Пройти</Link>
              </div>
            </div>
            <Teacher />
          </div> || 
          <div className="pagetitle">
            <h1>Модуль не найден</h1>
          </div>
        }
      </div>
    </AppLayout>
  )

}

export default PageModule