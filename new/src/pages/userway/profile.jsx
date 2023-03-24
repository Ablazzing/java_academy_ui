import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import UserwayLayout from '@/layouts/userway'
import Topbar from '@/components/Topbar'
import { dispatchEvent, removeEvent } from '@/utils'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import ProfileRepository from '@/repositories/profile'

const ProfilePage = () => {

  const profile = useSelector(state => state.user.profile)
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState('')
  const validateSchemaMain = Yup.object().shape({
    username: Yup.string()
      .required('Необходимо указать имя пользователя'),
    email: Yup.string()
      .required('Необходимо указать email')
      .email('Не верный формат email'),
    telegram: Yup.string()
      .required('Необходимо указать telegram')
  })
  const formikMain = useFormik({
    initialValues: {
      username: profile?.username ? profile.username : '',
      email: profile?.email ? profile.email : '',
      telegram: profile?.telegram ? profile.telegram : ''
    },
    validationSchema: validateSchemaMain,
    onSubmit: async (values, { resetForm }) => {
      setErrors('')
      setLoading(true)
      const response = await ProfileRepository.setData(values)
      setLoading(false)
      response && resetForm() || !response && setErrors('Ошибка в данных')
    }
  })
  const validateSchemaPassword = Yup.object().shape({
    password: Yup.string()
      .required('Необходимо указать пароль')
      .min(6, 'Минимальная длина пароля 6 символов')
      .max(40, 'Максимальная длина пароля 40 символов'),
    confirmPassword: Yup.string().when('password', (password, field) => {
      if(password) {
        return field.required('Пароли не совпадают')
          .oneOf([Yup.ref('password')], 'Пароли не совпадают')
      }
    })
  })
  const formikPassword = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: validateSchemaPassword,
    onSubmit: async (values, { resetForm }) => {
      setErrors('')
      setLoading(true)
      //const response = await AuthRepository.signin(values)
      setLoading(false)
      response && resetForm() || !response && setErrors('Ошибка в данных')
    }
  })
  
  const refFile = useRef()
  const changeFile = () => {
    refFile.current.click()
  }
  const handleChange = (e) => setModel({ ... model, ... {[e.target.name]: e.target.value} })
  const [isMainForm, setMainForm] = useState(true)
  const fileUpload = (e) => {
    console.log(e.target.files[0])
    // file
  }

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => removeEvent('stopLoader')
  }, [])

  return (
    <UserwayLayout>
      <Head>
        <title>Профиль пользователя</title>
      </Head>
      
      <div className="wrap container profile">
        <Topbar />
        <div className="pagetitle"><h1>Профиль</h1></div>
        <div className="userdata">
          <div className="photo">
            <input onChange={ fileUpload } type="file" ref={ refFile } />
            {
              !profile.profileImage && <svg><use xlinkHref="/theme/sprite.svg#avatar"></use></svg>
              || <img src={`data:image/jpeg;base64,${profile.profileImage.data}`} />
            }
          </div>
          <button onClick={ changeFile } className="filechange" type="button">Изменить фото</button>
          {
            isMainForm && 
            <form onSubmit={ formikMain.handleSubmit } className={ loading ? 'disabled' : '' } action="">
              <fieldset className='mt'>
                <input 
                  onChange={ formikMain.handleChange } 
                  value={ formikMain.values.username } 
                  className={ formikMain.errors.username ? 'error' : '' } 
                  name="username" 
                  type="text" 
                  placeholder="Ваше имя" 
                />
                { formikMain.errors.username && <span className="error">{ formikMain.errors.username }</span> }
              </fieldset>
              <fieldset>
                <input 
                  onChange={ formikMain.handleChange } 
                  value={ formikMain.values.email } 
                  className={ formikMain.errors.email ? 'error' : '' } 
                  name="email" 
                  type="text" 
                  placeholder="Ваш email" 
                />
                { formikMain.errors.email && <span className="error">{ formikMain.errors.email }</span> }
              </fieldset>
              <fieldset>
                <input 
                  onChange={ formikMain.handleChange } 
                  value={ formikMain.values.telegram } 
                  className={ formikMain.errors.telegram ? 'error' : '' } 
                  name="telegram" 
                  type="text" 
                  placeholder="Ваш телеграм" 
                />
                { formikMain.errors.telegram && <span className="error">{ formikMain.errors.telegram }</span> }
              </fieldset>
              <button onClick={ () => setMainForm(false) } type="button">Изменить пароль</button>
              <button className="btn st4" type='submit'>
                { loading && <div className="formloader"></div> }
                <span>Сохранить</span>
              </button>
              { errors && <span className="errorform">{ errors }</span> }
            </form> || 
            <form onSubmit={ formikPassword.handleSubmit } className={ loading ? 'disabled' : '' } action="">
              <fieldset className='mt'>
                <input 
                  onChange={ formikPassword.handleChange } 
                  value={ formikPassword.values.password } 
                  className={ formikPassword.errors.password ? 'error' : '' } 
                  name="password" 
                  type="password" 
                  placeholder="Пароль" 
                />
                { formikPassword.errors.password && <span className="error">{ formikPassword.errors.password }</span> }
              </fieldset>
              <fieldset>
                <input 
                  onChange={ formikPassword.handleChange } 
                  value={ formikPassword.values.confirmPassword } 
                  className={ formikPassword.errors.emaconfirmPasswordil ? 'error' : '' } 
                  name="confirmPassword" 
                  type="password" 
                  placeholder="Подтверждение пароля" 
                />
                { formikPassword.errors.confirmPassword && <span className="error">{ formikPassword.errors.confirmPassword }</span> }
              </fieldset>
              <button onClick={ () => setMainForm(true) } type="button">Изменить данные</button>
              <button className="btn st4" type='submit'>
                { loading && <div className="formloader"></div> }
                <span>Сохранить</span>
              </button>
              { errors && <span className="errorform">{ errors }</span> }
            </form>
          }
        </div>
      </div>
    </UserwayLayout>
  )

}

export default ProfilePage