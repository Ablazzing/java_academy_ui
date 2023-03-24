import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import WayRepository from '@/repositories/way'
import { dispatchEvent, removeEvent } from '@/utils'
import UserwayLayout from '@/layouts/userway'
import Topbar from '@/components/Topbar'
import Teacher from '@/components/Teacher'

const ProjectPage = () => {
  
  const router = useRouter()
  const [module, setModule] = useState({})
  const [error, setError] = useState(false)
  const loadPageData = async () => {
    const tempModule = await WayRepository.getModule({
      slug: router.query.module
    })
    if(tempModule) {
      const project = await WayRepository.getProject({
        slug: router.query.module
      })
      if(project) {
        tempModule.project = project
        setModule(tempModule)
      }
    }
    if(!tempModule || !tempModule.project) setError(true)
  }
  
  useEffect(() => {
    loadPageData()
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <UserwayLayout>
      <Head>
        <title>{ error ? 'Проект не найден' : module?.project?.projectInfo?.russianName }</title>
      </Head>
      <div className="wrap container project">
        <Topbar />
        {
          !error && 
          <div className="flexcontent">
            <div className="main boxshadow">
              <div className="pagetitle">
                <h1>{ module?.project?.projectInfo?.russianName }</h1>
                {(
                  module?.project?.projectStatus === 'В работе' && 
                  <span className="badge orange">В работе</span>
                ) || (
                  module?.project?.projectStatus === 'В работе2' && 
                  <span className="badge blue">В работе2</span>
                )}
              </div>
              <div className="subtitle">
                <span>Модуль</span>
                <Link href={`/userway/module/${ module.name }`}>{ module.russianName }</Link>
              </div>
              <div className="body">
                <div className="title">Описание проекта</div>
                <div className="text">{ module?.project?.projectInfo?.description }</div>
              </div>
              <ul className="steps">
                {module?.project?.steps.map((e, i) => {
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
    </UserwayLayout>
  )

}

export default ProjectPage