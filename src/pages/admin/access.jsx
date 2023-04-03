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

const AdminAccessPage = () => {
  
  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const [ modules, setModules ] = useState([])
  const [ open, setOpen ] = useState(false)
  const [ select, setSelect ] = useState('')
  const { closeLoader } = useLoader()
  const formik = useFormik({
    initialValues: {
      email: '',
      moduleName: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object().shape({
      email: Yup.string().required(messages.access.email.nf).email(messages.access.email.nv)
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const response = await appApi().modules.putModule(values)
      if(response) {
        resetForm()
        NotificationManager.success(messages.access.success.create)
      } else {
        NotificationManager.error(messages.access.errors.create)
      }
      setLoading(false)
    }
  })
  const setData = (label, value) => {
    setSelect(label)
    formik.setFieldValue('moduleName', value)
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
    <AppLayout title='Открытие доступа'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Открытие доступа</span>
        </div>
        <form onSubmit={ formik.handleSubmit } className={`boxshadow ${loading ? 'disabled' : ''}`} action="">
          <fieldset>
            <input 
              onChange={ formik.handleChange } 
              value={ formik.values.email } 
              className={ formik.errors.email ? 'error' : '' } 
              name="email" 
              type="text" 
              placeholder="Email пользователя" 
            />
            { formik.errors.email && <span className="error">{ formik.errors.email }</span> }
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
                  value={ formik.values.moduleName } 
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

export default AdminAccessPage