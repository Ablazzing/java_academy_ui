import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { appApi } from '@/repositories'
import { moduleStatuses } from '@/utils'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'
import { Teacher } from '@/components/teacher'

const ProjectPage = () => {
  
  const router = useRouter()
  const [ module, setModule ] = useState({})
  const [ error, setError ] = useState(false)
  const { closeLoader } = useLoader()
  const loadPageData = async () => {
    const tempModule = await appApi().modules.getModule({
      slug: router.query.module
    })
    if(tempModule) {
      const project = await appApi().projects.getProject({
        slug: router.query.module
      })
      if(project) {
        tempModule.project = project
        console.log(tempModule)
        setModule(tempModule)
      }
    }
    if(!tempModule || !tempModule.project) setError(true)
    closeLoader()
  }
  
  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title={ error ? 'Проект не найден' : module.project?.projectInfo?.russianName }>
      <div className="wrap container project">
        <Topbar />
        {!error && 
          <div className="flexcontent">
            <div className="main boxshadow">
              <div className="pagetitle">
                <h1>{ module.project?.projectInfo?.russianName }</h1>
                { moduleStatuses[module.project?.projectStatus] && 
                  <div className={`badge ${ moduleStatuses[module.project?.projectStatus] }`}>
                    { module.project?.projectStatus }
                  </div>
                }
              </div>
              <div className="subtitle">
                <span>Модуль</span>
                <Link href={`/userway/module/${ module.name }`}>{ module.russianName }</Link>
              </div>
              <div className="body">
                <div className="title">Описание проекта</div>
                <div className="text">{ module.project?.projectInfo?.description }</div>
              </div>
              <ul className="steps">
                {module.project?.steps.map((e, i) => {
                  // <span className="access">Этап 3</span>
                  return <li key={ i }>
                    <Link href={`/userway/module/${ module.name }/project/step/${ e.step }`}>
                      Этап { e.step }
                    </Link>
                    { e.isClosed && <>
                      <svg><use xlinkHref="/theme/sprite.svg#module_check_round"></use></svg>
                      <span className='gray'>Принят</span>
                    </> }
                  </li>
                })}
              </ul>
            </div>
            <Teacher />
          </div> || 
          <div className="pagetitle">
            <h1>Проект не найден</h1>
          </div>
        }
        
      </div>
    </AppLayout>
  )

}

export default ProjectPage