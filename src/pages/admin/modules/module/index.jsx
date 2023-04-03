import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { appApi } from '@/repositories'
import { messages } from '@/lang'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminModuleCreatePage = () => {
  
  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const { closeLoader } = useLoader()
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      name: '',
      russianName: '',
      description: '',
      order: '',
      positionTop: '',
      positionLeft: '',
      positionWidth: '',
      isFree: '1',
      price: ''
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required(messages.module.name.nf),
      russianName: Yup.string().required(messages.module.russianName.nf),
      description: Yup.string().required(messages.module.description.nf),
      order: Yup.string().required(messages.module.order.nf),
      positionTop: Yup.string().required(messages.module.positionTop.nf),
      positionLeft: Yup.string().required(messages.module.positionLeft.nf),
      positionWidth: Yup.string().required(messages.module.positionWidth.nf)
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const params = JSON.parse(JSON.stringify(values))
      params.position = {
        top: values.positionTop,
        left: values.positionLeft,
        width: values.positionWidth
      }
      params.isFree = parseInt(params.isFree) ? true : false
      delete params.positionTop
      delete params.positionLeft
      delete params.positionWidth
      const response = await appApi().modules.createModule(params)
      console.log(response)
      setLoading(false)
      return
      if(response) {
        resetForm()
        
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
    <AppLayout title='Создание модуля'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Создание модуля</span>
        </div>
        <form onSubmit={ form.handleSubmit } className={ `boxshadow ${ loading ? 'disabled' : '' }` } action="">
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.name } 
              className={ form.errors.name ? 'error' : '' } 
              name="name" type="text" placeholder="Русское название" 
            />
            { form.errors.name && <span className="error">{ form.errors.name }</span> }
          </fieldset>
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.russianName } 
              className={ form.errors.russianName ? 'error' : '' } 
              name="russianName" type="text" placeholder="Английское название" 
            />
            { form.errors.russianName && <span className="error">{ form.errors.russianName }</span> }
          </fieldset>
          <fieldset>
            <textarea 
              onChange={ form.handleChange } 
              value={ form.values.description } 
              className={ form.errors.description ? 'error' : '' } 
              name="description" type="text" placeholder="Описание" 
            />
            { form.errors.description && <span className="error">{ form.errors.description }</span> }
          </fieldset>
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.order } 
              className={ form.errors.order ? 'error' : '' } 
              name="order" type="number" min="0" placeholder="Порядковый номер" 
            />
            { form.errors.order && <span className="error">{ form.errors.order }</span> }
          </fieldset>
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.positionTop } 
              className={ form.errors.positionTop ? 'error' : '' } 
              name="positionTop" type="number" min="0" placeholder="Позиция по оси x" 
            />
            { form.errors.positionTop && <span className="error">{ form.errors.positionTop }</span> }
          </fieldset>
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.positionLeft } 
              className={ form.errors.positionLeft ? 'error' : '' } 
              name="positionLeft" type="number" min="0" placeholder="Позиция по оси y" 
            />
            { form.errors.positionLeft && <span className="error">{ form.errors.positionLeft }</span> }
          </fieldset>
          <fieldset>
            <input 
              onChange={ form.handleChange } 
              value={ form.values.positionWidth } 
              className={ form.errors.positionWidth ? 'error' : '' } 
              name="positionWidth" type="number" min="0" placeholder="Ширина" 
            />
            { form.errors.positionWidth && <span className="error">{ form.errors.positionWidth }</span> }
          </fieldset>
          <fieldset className="switchbox">
            <div className="label">Бесплатный</div>
            <ul>
              <li>
                <input 
                  onChange={ form.handleChange }
                  checked={ form.values.isFree === '1' }
                  value="1" type="radio" name="isFree" id="isFree1"
                />
                <label htmlFor="isFree1">Да</label>
              </li>
              <li>
                <input
                  onChange={ form.handleChange }
                  checked={ form.values.isFree === '0' }
                  value="0" type="radio" name="isFree" id="isFree2"
                />
                <label htmlFor="isFree2">Нет</label>
              </li>
            </ul>
          </fieldset>
          {
            !Number(form.values.isFree) && 
            <fieldset>
              <input 
                onChange={ form.handleChange } 
                value={ form.values.price } 
                className={ form.errors.price ? 'error' : '' } 
                name="price" type="number" min="0" placeholder="Стоимость" 
              />
            </fieldset> || ''
          }
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
      <NotificationContainer />
    </AppLayout>
  )

}

export default AdminModuleCreatePage