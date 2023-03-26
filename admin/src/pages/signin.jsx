import Head from 'next/head'
import Link from 'next/link'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import AuthLayout from '@/layouts/Auth'
import { useEffect, useState } from 'react'
import { dispatchEvent, removeEvent } from '@/utils'
import { useRouter } from 'next/router'

const SigninPage = () => {

  const router = useRouter()
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
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        console.log(values)
        if(values.email !== 'admin@mail.ru' || values.password !== 'admin') {
          setErrors('Не верные логин или пароль')
        } else {
          router.push('/')
        }
      }, 300)
    }
  })

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <AuthLayout>
      <Head><title>Авторизация</title></Head>
      <div className="wrap container auth">
        <form onSubmit={ formik.handleSubmit } className={ loading ? 'disabled' : '' }>
          <Link href="/" className="logo">
            <img src="/theme/img/logo_dark.svg" alt="" />
          </Link>
          <div className="pagetitle">Вход</div>
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
          <button className="btn" type="submit">
            { loading && <div className="formloader"></div> }
            <span>Войти</span>
          </button>
          { errors && <span className="errorform">{ errors }</span> }
        </form>
      </div>
    </AuthLayout>
  )

}

export default SigninPage