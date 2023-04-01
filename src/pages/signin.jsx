import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { appApi } from '@/repositories'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'

const SigninPage = () => {
  
  const router = useRouter()
  const loading = useRef(false)
  const errors = useRef('')
  const { setLoader } = useApp()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Необходимо указать email')
        .email('Не верный формат email'),
      password: Yup.string().required('Необходимо указать пароль')
    }),
    onSubmit: async (values, { resetForm }) => {
      errors.current = ''
      loading.current = true
      const response = await appApi().auth.signin(values)
      if(response) {
        resetForm()
        const route = (response.isAdmin || response.isModerator) ? '/admin' : '/userway'
        router.push(route)
      } else {
        errors.current = 'Не верные логин или пароль'
      }
      loading.current = false
    }
  })

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Авторизация'>
      <form onSubmit={ formik.handleSubmit } className={ loading.current ? 'disabled' : '' } action="">
        <Link href="/" className="logo">
          <img src="/theme/logo_dark.svg" alt="" />
        </Link>
        <div className="pagetitle"><h1>Вход</h1></div>
        <fieldset>
          <input 
            onChange={ formik.handleChange } 
            value={ formik.values.email } 
            className={ formik.errors.email ? 'error' : '' } 
            name="email" 
            type="text" 
            placeholder="Ваш email" 
          />
          { formik.errors.email && <span className="error">{ formik.errors.email }</span> }
        </fieldset>
        <fieldset>
          <input 
            onChange={ formik.handleChange } 
            value={ formik.values.password } 
            className={ formik.errors.password ? 'error' : '' } 
            name="password" 
            type="password" 
            placeholder="Пароль" 
          />
          { formik.errors.password && <span className="error">{ formik.errors.password }</span> }
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
        { errors.current && <span className="errorform">{ errors.current }</span> }
      </form>
    </AppLayout>
  )

}

export default SigninPage