import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { appApi } from '@/repositories'
import { messages } from '@/lang'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminProjectCreate = () => {

  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const [ modules, setModules ] = useState([])
  const [ open, setOpen ] = useState(false)
  const [ select, setSelect ] = useState('')
  const { closeLoader } = useLoader()
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: '',
      russianName: '',
      description: '',
      moduleName: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(messages.project.name.nf),
      russianName: Yup.string().required(messages.project.russianName.nf),
      description: Yup.string().required(messages.project.description.nf)
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const response = await appApi().projects.createProject(values)
      if(response) {
        resetForm()
        NotificationManager.success(messages.project.success.create)
      } else {
        NotificationManager.error(messages.project.errors.create)
      }
      setLoading(false)
    }
  })
  const setData = (label, value) => {
    setSelect(label)
    form.setFieldValue('moduleName', value)
    setOpen(false)
  }
  const loadPageData = async () => {
    const response = await appApi().modules.getModules()
    setModules(response)
    setData(response[0].russianName, response[0].name)
    closeLoader()
  }

  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title='Создание проекта'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Создание проекта</span>
        </div>
        <form onSubmit={ form.handleSubmit } className={`boxshadow ${loading ? 'disabled' : ''}`} action="">
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.name } 
              className={ form.errors.name ? 'error' : '' } 
              name="name" 
              type="text" 
              placeholder="Русское название" 
            />
            { form.errors.name && <span className="error">{ form.errors.name }</span> }
          </fieldset>
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.russianName } 
              className={ form.errors.russianName ? 'error' : '' } 
              name="russianName" 
              type="text" 
              placeholder="Английское название" 
            />
            { form.errors.russianName && <span className="error">{ form.errors.russianName }</span> }
          </fieldset>
          <fieldset>
            <textarea 
              onChange={ form.handleChange } 
              value={ form.values.description } 
              className={ form.errors.description ? 'error' : '' } 
              name="description" 
              type="text" 
              placeholder="Описание" 
            />
            { form.errors.description && <span className="error">{ form.errors.description }</span> }
          </fieldset>
          <fieldset className="selectbox">
            <button onClick={ () => setOpen(!open) } className={ open ? 'active' : '' } type="button">
              { select }
            </button>
            <ul className={ open ? 'open' : '' }>
            {modules.map((e, i) => {
              return <li key={ i }>
                <input 
                  onChange={ () => { setData(e.russianName, e.name) } }
                  value={ form.values.moduleName } 
                  id={`radio${i}`} 
                  name="moduleName" 
                  type="radio" 
                />
                <label htmlFor={`radio${i}`}>{ e.russianName }</label>
              </li>
            })}
            </ul>
          </fieldset>
          <button className="btn st5" type="submit">
            { loading && <div className="formloader"></div> }
            <span>Отправить</span>
          </button>
        </form>
      </div>
      <NotificationContainer />
    </AppLayout>
  )

}

export default AdminProjectCreate