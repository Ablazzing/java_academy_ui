import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { appApi } from '@/repositories'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'


const SignupPage = () => {
  
  const router = useRouter()
  const loading = useRef(false)
  const errors = useRef('')
  const { setLoader } = useApp()
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Необходимо указать email')
        .email('Не верный формат email'),
      username: Yup.string().required('Необходимо указать имя'),
      password: Yup.string().required('Необходимо указать пароль')
        .min(6, 'Минимальная длина пароля 6 символов')
        .max(40, 'Максимальная длина пароля 40 символов'),
      confirmPassword: Yup.string().when('password', (password, field) => {
        if(password) {
          return field.required('Пароли не совпадают').oneOf(
            [Yup.ref('password')], 
            'Пароли не совпадают'
          )
        }
      })
    }),
    onSubmit: async (values, { resetForm }) => {
      errors.current = ''
      loading.current = true
      const response = await appApi().auth.signup(values)
      if(response) {
        resetForm()
        router.push('/signin')
      } else {
        errors.current = 'Ошибка в данных'
      }
      loading.current = false
    }
  })
  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Регистрация'>
      <form onSubmit={ formik.handleSubmit } className={ loading.current ? 'disabled' : '' } action="">
        <Link href="/" className="logo">
          <img src="/theme/logo_dark.svg" alt="" />
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
          { loading.current && <div className="formloader"></div> }
          <span>Зарегистрироваться</span>
        </button>
        { errors.current && <span className="errorform">{ errors.current }</span> }
      </form>
    </AppLayout>
  )

}

export default SignupPage