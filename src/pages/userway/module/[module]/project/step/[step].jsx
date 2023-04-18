import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as moment from 'moment'
import * as Yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { appApi } from '@/repositories'
import { messages } from '@/lang'
import { stepStatuses } from '@/utils'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'
import { Teacher } from '@/components/teacher'

const StepPage = () => {

  const router = useRouter()
  const loading = useRef(null)
  const [ module, setModule ] = useState({})
  const [ error, setError ] = useState(false)
  const { closeLoader } = useLoader()
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      gitUrl: '',
      moduleName: '',
      step: null
    },
    validationSchema: Yup.object().shape({
      gitUrl: Yup.string().required(messages.project.git.nf)
    }),
    onSubmit: async (values, { resetForm }) => {
      loading.current = 'disabled'
      const response = await appApi().projects.sendProjectStep(values)
      if(response) {
        resetForm()
        NotificationManager.success(messages.project.success.git)
      } else {
        NotificationManager.error(messages.project.errors.undefined)
      }
      loading.current = false
    }
  })
  const loadPageData = async () => {
    const tempModule = await appApi().modules.getModule({
      moduleName: router.query.module
    })
    if(tempModule) {
      const project = await appApi().projects.getProject({
        moduleName: router.query.module
      })
      if(project) tempModule.project = project
      form.setFieldValue('moduleName', tempModule.name)
      form.setFieldValue('step', router.query.step)
    }
    if(tempModule && tempModule.project) {
      const step = await appApi().projects.getStep({
        moduleName: router.query.module,
        stepNumber: router.query.step
      })
      if(step) {
        tempModule.step = step
        setModule(tempModule)
      }
    }
    if(!tempModule || !tempModule.project || !tempModule.step) setError(true)
    closeLoader()
  }
  
  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title={ error ? 'Этап не найден' : module?.project?.projectInfo?.russianName }>
      <div className="wrap container step">
        <Topbar />
        {!error && 
          <div className="flexcontent">
            <div className="main">
              <div className="boxshadow">
                <div className="pagetitle">
                  <h1>Проект Тоyota</h1>
                  <span className='label'>Этап { module.step?.step }</span>
                  { stepStatuses[module.step?.status] && 
                    <div className={`badge ${ stepStatuses[module.step?.status] }`}>
                      { module.step?.status }
                    </div>
                  }
                </div>
                <div className="subtitle">
                  <span>Модуль</span>
                  <Link href={`/userway/module/${ module.name }`}>{ module.russianName }</Link>
                </div>
              </div>
              <div className="boxtitle">Описание этапа</div>
              <div className="boxshadow">
                <div className="body">{ module.step?.projectInfoStep?.description }</div>
              </div>
              <div className="boxtitle">Требования</div>
              <ul className="list">
              {module.step && module.step.projectInfoStep.requirements.map((e, i) => {
                return <li className="boxshadow" key={ i }>
                  { e }
                </li>
              })}
              </ul>
              <div className="boxtitle">Решение</div>
              <div className="boxshadow">
                {module?.step?.gitUrl && 
                  <div className="item">
                    <div className="label">Решение</div>
                    <div className="desc">
                      <span>{ module?.step?.gitUrl }</span>
                    </div>
                  </div>
                }
                {module.step && module.step.comments.map((e, i) => {
                  return <div className="item" key={ i }>
                    <div className="label">Комментарий</div>
                    <div className="desc">
                      <span>{ e.comment }</span>
                      <span>{ moment(e.time).format('HH:mm DD.MM.YYYY') }</span>
                    </div>
                  </div>
                })}
              </div>
              <div className="boxshadow">
                <form onSubmit={ form.handleSubmit } className={`item ${ loading.current ? 'disabled' : '' }`} action="">
                  <label htmlFor="field">Отправь ссылку на GitHub </label>
                  <fieldset>
                    <input 
                      onChange={ form.handleChange } 
                      value={ form.values.gitUrl } 
                      className={ form.errors.gitUrl ? 'error' : '' } 
                      name="gitUrl" type="text" placeholder="http://" 
                    />
                    { form.errors.gitUrl && <span className="error">{ form.errors.gitUrl }</span> }
                    <button className="btn st4" type="submit">Отправить решение</button>
                  </fieldset>
                </form>
              </div>
            </div>
            <Teacher />
          </div> || 
          <div className="pagetitle">
            <h1>Этап не найден</h1>
          </div>
        }
      </div>
      <NotificationContainer />
    </AppLayout>
  )

}

export default StepPage