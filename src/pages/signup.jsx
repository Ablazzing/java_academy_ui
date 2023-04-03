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


const SignupPage = () => {
  
  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const { closeLoader } = useLoader()
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(messages.user.email.nf).email(messages.user.email.nv),
      username: Yup.string().required(messages.user.username.nf),
      password: Yup.string().required(messages.user.pass.nf).min(6, messages.user.pass.min).max(40, messages.user.pass.max),
      confirmPassword: Yup.string().when('password', (password, field) => {
        if(password) return field.required(messages.user.pass.nv).oneOf([Yup.ref('password')], messages.user.pass.nv)
      })
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const response = await appApi().auth.signup(values)
      if(response) {
        resetForm()
        router.push('/signin')
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
    <AppLayout title='Регистрация'>
      <form onSubmit={ form.handleSubmit } className={ loading ? 'disabled' : '' } action="">
        <Link href="/" className="logo">
          <img src="/theme/logo_dark.svg" alt="" />
        </Link>
        <div className="pagetitle"><h1>Регистрация</h1></div>
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
        <fieldset>
          <input 
            onChange={ form.handleChange } 
            value={ form.values.username } 
            className={ form.errors.username ? 'error' : '' } 
            name="username" 
            type="text" 
            placeholder="Ваше имя" 
          />
          { form.errors.username && <span className="error">{ form.errors.username }</span> }
        </fieldset>
        <fieldset>
          <input 
            onChange={ form.handleChange } 
            value={ form.values.password } 
            className={ form.errors.password ? 'error' : '' } 
            name="password" 
            type="password" 
            placeholder="Пароль" 
          />
          { form.errors.password && <span className="error">{ form.errors.password }</span> }
        </fieldset>
        <fieldset>
          <input 
            onChange={ form.handleChange } 
            value={ form.values.confirmPassword } 
            className={ form.errors.emaconfirmPasswordil ? 'error' : '' } 
            name="confirmPassword" 
            type="password" 
            placeholder="Подтверждение пароля" 
          />
          { form.errors.confirmPassword && <span className="error">{ form.errors.confirmPassword }</span> }
        </fieldset>
        <div className="actions">
          <span>Уже есть пароль?</span>
          <Link href="/signin"><strong>Войти</strong></Link>
        </div>
        <button className="btn st3" type="submit">
          { loading && <div className="formloader"></div> }
          <span>Зарегистрироваться</span>
        </button>
      </form>
      <NotificationContainer />
    </AppLayout>
  )

}

export default SignupPage