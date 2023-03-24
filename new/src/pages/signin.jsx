import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { dispatchEvent, removeEvent } from '@/utils'
import AuthRepository from '@/repositories/auth'
import AuthLayout from '@/layouts/auth'

const SigninPage = () => {
  
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .required('Необходимо указать email')
      .email('Не верный формат email'),
    password: Yup.string()
      .required('Необходимо указать пароль')
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      setErrors('')
      setLoading(true)
      const response = await AuthRepository.signin(values)
      setLoading(false)
      response && resetForm() || !response && setErrors('Не верные логин или пароль')
    }
  })
  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AuthLayout>
      <Head>
        <title>Авторизация</title>
        <meta name="description" content="SEO description" />
        <meta name="keywords" content="SEO keywords" />
      </Head>

      <form onSubmit={ formik.handleSubmit } className={ loading ? 'disabled' : '' } action="">
        <Link href="/" className="logo">
          <img src="/theme/img/logo_dark.svg" alt="" />
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
          { loading && <div className="formloader"></div> }
          <span>Войти</span>
        </button>
        { errors && <span className="errorform">{ errors }</span> }
      </form>
    </AuthLayout>
  )

}

export default SigninPage