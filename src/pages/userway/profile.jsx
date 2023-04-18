import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { appApi } from '@/repositories'
import { messages } from '@/lang'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'

const ProfilePage = () => {
  
  const router = useRouter()
  const refFile = useRef()
  const profile = useSelector(state => state.app.profile)
  const [ loading, setLoading ] = useState(false)
  const [ uploading, setUploading ] = useState(false)
  const [ isMainForm, setMainForm ] = useState(true)
  const { closeLoader } = useLoader()
  const formMain = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      username: profile?.username ? profile.username : '',
      email: profile?.email ? profile.email : '',
      telegram: profile?.telegram ? profile.telegram : ''
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required(messages.user.username.nf),
      email: Yup.string().required(messages.user.email.nf).email(messages.user.email.nv)
    }),
    onSubmit: async (values) => {
      setLoading(true)
      values.roles = profile.roles
      const response = await appApi().user.setData(values)
      if(response) {
        NotificationManager.success(messages.user.success.main)
        if(response.token) window.localStorage.setItem('token', response.token)
      } else {
        NotificationManager.error(messages.user.errors.undefined)
      }
      setLoading(false)
    }
  })
  const formPass = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validationSchema: Yup.object().shape({
      password: Yup.string().required(messages.user.pass.nf).min(6, messages.user.pass.min).max(40, messages.user.pass.max),
      confirmPassword: Yup.string().when('password', (password, field) => {
        if(password) return field.required(messages.user.pass.nv).oneOf([Yup.ref('password')], messages.user.pass.nv)
      })
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      values.roles = profile.roles
      const response = await appApi().user.setPassword(values)
      if(response) {
        NotificationManager.success(messages.user.success.pass)
        if(response.token) window.localStorage.setItem('token', response.token)
      } else {
        NotificationManager.error(messages.user.errors.undefined)
      }
      resetForm()
      setLoading(false)
    }
  })
  const fileUpload = async (event) => {
    if(event.target.files[0]) {
      setUploading(true)
      const formData = new FormData()
      formData.append('file', event.target.files[0])
      await appApi().user.setPhoto(formData)
      NotificationManager.success('Фотография успешно обновлена')
      setUploading(false)
    }
  }
  
  useEffect(() => {
    if(profile) {
      profile.username && formMain.setFieldValue('username', profile.username)
      profile.email && formMain.setFieldValue('email', profile.email)
      profile.telegram && formMain.setFieldValue('telegram', profile.telegram)
      setTimeout(() => formMain.setErrors({}), 1)
    }
  }, [ profile ])
  useEffect(() => {
    router.isReady && setTimeout(() => closeLoader(), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Профиль пользователя'>
      <div className="wrap container profile">
        <Topbar />
        <div className="pagetitle"><h1>Профиль</h1></div>
        <div className="userdata">
          <div className="photo">
            <input onChange={ fileUpload } type="file" ref={ refFile } />
            {!profile?.image?.data && 
              <svg onClick={ () => refFile.current.click() }><use xlinkHref="/theme/sprite.svg#avatar"></use></svg>
              || 
              <img onClick={ () => refFile.current.click() } src={`data:image/jpeg;base64,${profile?.image?.data}`} />
            }
            <div className={`loader ${uploading ? 'active' : ''}`}></div>
          </div>
          <button onClick={ () => refFile.current.click() } className="filechange" type="button">Изменить фото</button>
          {
            isMainForm && 
            <form onSubmit={ formMain.handleSubmit } className={ loading ? 'disabled' : '' } action="">
              <fieldset className='mt'>
                <input 
                  onChange={ formMain.handleChange } 
                  value={ formMain.values.username } 
                  className={ formMain.errors.username ? 'error' : '' } 
                  name="username" 
                  type="text" 
                  placeholder="Ваше имя" 
                />
                { formMain.errors.username && <span className="error">{ formMain.errors.username }</span> }
              </fieldset>
              <fieldset>
                <input 
                  onChange={ formMain.handleChange } 
                  value={ formMain.values.email } 
                  className={ formMain.errors.email ? 'error' : '' } 
                  name="email" 
                  type="text" 
                  placeholder="Ваш email" 
                />
                { formMain.errors.email && <span className="error">{ formMain.errors.email }</span> }
              </fieldset>
              <fieldset>
                <input 
                  onChange={ formMain.handleChange } 
                  value={ formMain.values.telegram } 
                  className={ formMain.errors.telegram ? 'error' : '' } 
                  name="telegram" 
                  type="text" 
                  placeholder="Ваш телеграм" 
                />
                { formMain.errors.telegram && <span className="error">{ formMain.errors.telegram }</span> }
              </fieldset>
              <button onClick={ () => setMainForm(false) } type="button">Изменить пароль</button>
              <button className="btn st4" type='submit'>
                { loading && <div className="formloader"></div> }
                <span>Сохранить</span>
              </button>
            </form> || 
            <form onSubmit={ formPass.handleSubmit } className={ loading ? 'disabled' : '' } action="">
              <fieldset className='mt'>
                <input 
                  onChange={ formPass.handleChange } 
                  value={ formPass.values.password } 
                  className={ formPass.errors.password ? 'error' : '' } 
                  name="password" 
                  type="password" 
                  placeholder="Пароль" 
                />
                { formPass.errors.password && <span className="error">{ formPass.errors.password }</span> }
              </fieldset>
              <fieldset>
                <input 
                  onChange={ formPass.handleChange } 
                  value={ formPass.values.confirmPassword } 
                  className={ formPass.errors.emaconfirmPasswordil ? 'error' : '' } 
                  name="confirmPassword" 
                  type="password" 
                  placeholder="Подтверждение пароля" 
                />
                { formPass.errors.confirmPassword && <span className="error">{ formPass.errors.confirmPassword }</span> }
              </fieldset>
              <button onClick={ () => setMainForm(true) } type="button">Изменить данные</button>
              <button className="btn st4" type='submit'>
                { loading && <div className="formloader"></div> }
                <span>Сохранить</span>
              </button>
            </form>
          }
        </div>
      </div>
      <NotificationContainer />
    </AppLayout>
  )

}

export default ProfilePage