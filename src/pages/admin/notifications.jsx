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

const AdminNotificationsPage = () => {
  
  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const { closeLoader } = useLoader()
  const formik = useFormik({
    initialValues: {
      text: '',
      url: '',
      urlText: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object().shape({
      text: Yup.string().required(messages.notify.text.nf)
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const response = await appApi().notify.create(values)
      if(response) {
        resetForm()
        NotificationManager.success(messages.notify.success.create)
      } else {
        NotificationManager.error(messages.notify.errors.create)
      }
      setLoading(false)
    }
  })

  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Создание уведомление'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Создание уведомление</span>
        </div>
        <form onSubmit={ formik.handleSubmit } className={`boxshadow ${loading.current ? 'disabled' : ''}`} action="">
          <fieldset>
            <textarea 
              onChange={ formik.handleChange } 
              value={ formik.values.text } 
              className={ formik.errors.text ? 'error' : '' } 
              name="text" 
              placeholder="Текст уведомления"
            />
            { formik.errors.text && <span className="error">{ formik.errors.text }</span> }
          </fieldset>
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
      <NotificationContainer />
    </AppLayout>
  )

}

export default AdminNotificationsPage