import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import ApiRepository from '@/repositories/api'
import AuthLayout from '@/layouts/auth'


const SignupPage = () => {

  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const validateSchema = Yup.object().shape({
    email: Yup.string()
      .required('Необходимо указать email')
      .email('Не верный формат email'),
    username: Yup.string()
      .required('Необходимо указать имя'),
    password: Yup.string()
      .required('Необходимо указать пароль'),
    confirmPassword: Yup.string().when('password', (password, field) => {
      if(password) {
        return field.required('Пароли не совпадают')
          .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      }
    })
  })
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: validateSchema,
    onSubmit: async (values, { resetForm }) => {
      setErrors('')
      setLoading(true)
      const response = await ApiRepository.signup(values)
      setLoading(false)
      response && router.push('/signin') || !response && setErrors('Ошибка в данных')
    }
  })

  return (
    <AuthLayout>
      <Head>
        <title>Регистрация</title>
        <meta name="description" content="SEO description" />
        <meta name="keywords" content="SEO keywords" />
      </Head>

      <form onSubmit={ formik.handleSubmit } className={ loading ? 'disabled' : '' } action="">
        <Link href="/" className="logo">
          <img src="/theme/img/logo_dark.svg" alt="" />
        </Link>
        <div className="pagetitle"><h1>Регистрация</h1></div>
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
            value={ formik.values.username } 
            className={ formik.errors.username ? 'error' : '' } 
            name="username" 
            type="text" 
            placeholder="Ваше имя" 
          />
          { formik.errors.username && <span className="error">{ formik.errors.username }</span> }
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
        <fieldset>
          <input 
            onChange={ formik.handleChange } 
            value={ formik.values.confirmPassword } 
            className={ formik.errors.emaconfirmPasswordil ? 'error' : '' } 
            name="confirmPassword" 
            type="password" 
            placeholder="Подтверждение пароля" 
          />
          { formik.errors.confirmPassword && <span className="error">{ formik.errors.confirmPassword }</span> }
        </fieldset>
        <div className="actions">
          <span>Уже есть пароль?</span>
          <Link href="/signin"><strong>Войти</strong></Link>
        </div>
        <button className="btn st3" type="submit">
          { loading && <div className="formloader"></div> }
          <span>Зарегистрироваться</span>
        </button>
        { errors && <span className="errorform">{ errors }</span> }
      </form>
    </AuthLayout>
  )

}

export default SignupPage