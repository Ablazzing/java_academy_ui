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

const SigninPage = () => {
  
  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const { closeLoader } = useLoader()
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(messages.user.email.nf).email(messages.user.email.nv),
      password: Yup.string().required(messages.user.pass.nf)
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const response = await appApi().auth.signin(values)
      if(response) {
        resetForm()
        const isAdmin = response.roles.find(e => e.toUpperCase() === 'ROLE_ADMIN') ? true : false
        const isModerator = response.roles.find(e => e.toUpperCase() === 'ROLE_MODERATOR') ? true : false
        const route = (isAdmin || isModerator) ? '/admin' : '/userway'
        router.push(route)
      } else {
        NotificationManager.error(messages.user.errors.auth)
      }
      setLoading(false)
    }
  })

  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Авторизация'>
      <form onSubmit={ form.handleSubmit } className={ loading ? 'disabled' : '' } action="" >
        <Link href="/" className="logo">
          <img src="/theme/logo_dark.svg" alt="" />
        </Link>
        <div className="pagetitle"><h1>Вход</h1></div>
        <fieldset>
          <input 
            onChange={ form.handleChange } 
            value={ form.values.email } 
            className={ form.errors.email ? 'error' : '' } 
            name="email" type="text" placeholder="Ваш email" 
          />
          { form.errors.email && <span className="error">{ form.errors.email }</span> }
        </fieldset>
        <fieldset>
          <input 
            onChange={ form.handleChange } 
            value={ form.values.password } 
            className={ form.errors.password ? 'error' : '' } 
            name="password" type="password" placeholder="Пароль" 
          />
          { form.errors.password && <span className="error">{ form.errors.password }</span> }
        </fieldset>
        <div className="actions beetwen">
          <Link href="/forgot">Забыли пароль?</Link>
          <Link href="/signup">
            <strong>Регистрация</strong>
          </Link>
        </div>
        <button className="btn st3" type="submit">
          { loading.current && <div className="formloader"></div> }
          <span>Войти</span>
        </button>
      </form>
      <NotificationContainer />
    </AppLayout>
  )

}

export default SigninPage