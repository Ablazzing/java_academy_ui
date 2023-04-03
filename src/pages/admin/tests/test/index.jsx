import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { appApi } from '@/repositories'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Breadcrumbs } from '@/components/breadcrumbs'

const AdminTestCreatePage = () => {
  
  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const [ modules, setModules ] = useState([])
  const [ open1, setOpen1 ] = useState(false)
  const [ open2, setOpen2 ] = useState(false)
  const [ select1, setSelect1 ] = useState('Модуль 1')
  const [ select2, setSelect2 ] = useState('Верный ответ 1')
  const { closeLoader } = useLoader()
  const formik = useFormik({
    initialValues: {
      moduleName: '',
      description: '',
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: Yup.object().shape({
      email: Yup.string().required('Необходимо указать email')
        .email('Не верный формат email')
    }),
    onSubmit: async (values, { resetForm }) => {
      setLoading(true)
      const response = await appApi().modules.putModule(values)
      if(response) {
        
      } else {
        errors.current = 'Не верные данные'
      }
      setLoading(false)
    }
  })
  const setData1 = (label, value) => {
    setSelect1(label)
    formik.setFieldValue('moduleName', value)
    setOpen1(false)
  }
  const setData2 = (e) => {
    setSelect2(e.target.value)
    setOpen2(false)
  }
  const loadPageData = async () => {
    const response = await appApi().modules.getModules()
    setModules(response)
    setData1(response[0].russianName, response[0].name)
    closeLoader()
  }

  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title='Создание теста'>
      <div className="wrap container">
        <Breadcrumbs />
        <div className="pagetitle admin">
          <span>Создание теста</span>
        </div>
        <form className="boxshadow" action="">
          <fieldset className="selectbox">
            <button onClick={ () => setOpen1(!open1) } className={ open1 ? 'active' : '' } type="button">
              { select1 }
            </button>
            <ul className={ open1 ? 'open' : '' }>
            {modules.map((e, i) => {
              return <li key={ i }>
                <input 
                  onChange={ () => { setData(e.russianName, e.name) } }
                  value={ formik.values.moduleName } 
                  id={`radio${i}`} 
                  name="moduleName" 
                  type="radio" 
                />
                <label htmlFor={`radio${i}`}>{ e.russianName }</label>
              </li>
            })}
            </ul>
          </fieldset>
          <fieldset>
            <textarea name="" placeholder="Вопрос"></textarea>
          </fieldset>
          <fieldset className="answerbox" >
            <textarea name="" placeholder="Ответ 1"></textarea>
            <textarea name="" placeholder="Ответ 2"></textarea>
            <textarea name="" placeholder="Ответ 3"></textarea>
            <textarea name="" placeholder="Ответ 4"></textarea>
          </fieldset>
          <fieldset className="selectbox">
            <button onClick={ () => setOpen2(!open2) } className={ open2 ? 'active' : '' } type="button">
              { select2 }
            </button>
            <ul className={ open2 ? 'open' : '' }>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 1" id="radio21" />
                <label htmlFor="radio21">Верный ответ 1</label>
              </li>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 2" id="radio22" />
                <label htmlFor="radio22">Верный ответ 2</label>
              </li>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 3" id="radio23" />
                <label htmlFor="radio23">Верный ответ 3</label>
              </li>
              <li>
                <input onChange={ setData2 } type="radio" name="radio2" value="Верный ответ 4" id="radio24" />
                <label htmlFor="radio24">Верный ответ 4</label>
              </li>
            </ul>
          </fieldset>
          <button className="btn st5" type="submit">Отправить</button>
        </form>
      </div>
    </AppLayout>
  )

}

export default AdminTestCreatePage