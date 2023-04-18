import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { appApi } from '@/repositories'
import { messages } from '@/lang'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'

const ForgotPasswordPage = () => {

  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const { closeLoader } = useLoader()
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(messages.user.email.nf).email(messages.user.email.nv)
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const response = await appApi().auth.forgot(values)
      if(response) {
        resetForm()
        NotificationManager.success(response)
      } else {
        NotificationManager.error(messages.user.errors.undefined)
      }
      setLoading(false)
    }
  })

  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Восстановление пароля'>
      <form onSubmit={ form.handleSubmit } className={ loading ? 'disabled' : '' } action="">
        <Link href="/" className="logo">
          <img src="/theme/logo_dark.svg" alt="" />
        </Link>
        <div className="pagetitle"><h1>Забыли пароль?</h1></div>
        <div className="desc">Мы пришлем на почту инструкцию для восстановления пароля</div>
        <fieldset>
          <input 
            onChange={ form.handleChange } 
            value={ form.values.email } 
            className={ form.errors.email ? 'error' : '' } 
            name="email" 
            type="text" 
            placeholder="Ваш email" 
          />
          { form.errors.email && <span className="error">{ form.errors.email }</span> }
        </fieldset>
        <button className="btn st3 mt" type="submit">Восстановить пароль</button>
        <div className="actions mt">
          <Link href="/signin"><strong>Вспомнил пароль</strong></Link>
        </div>
      </form>
      <NotificationContainer />
    </AppLayout>
  )

}

export default ForgotPasswordPage