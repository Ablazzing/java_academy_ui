import { useRef, useState } from 'react'
import Head from 'next/head'
import { Collapse } from 'react-collapse'
import UserwayLayout from '@/layouts/userway'
import TopBar from '@/components/Topbar'

const ProfilePage = () => {

  const [model, setModel] = useState({
    name: 'Никита',
    email: 'nikita@mail.ru',
    telegram: '@nikita-jave',
    password: '',
    passwordConfirm: ''
  })
  const refFile = useRef()
  const changeFile = () => {
    refFile.current.click()
  }
  const [collapse, setCollapse] = useState(false)
  const toggleCollapse = () => setCollapse(!collapse)
  const handleChange = (e) => setModel({ ... model, ... {[e.target.name]: e.target.value} })
  

  return (
    <UserwayLayout>
      <Head>
        <title>Profile</title>
      </Head>
      
      <div className="wrap container profile">
        <TopBar back="На главную"/>
        <div className="pagetitle"><h1>Профиль</h1></div>
        <div className="userdata">
          <div className="photo">
            <input type="file" ref={ refFile } />
            {
              true && <svg><use xlinkHref="/theme/sprite.svg#avatar"></use></svg>
              || <img src="/images/avatar.jpg" alt="" />
            }
          </div>
          <form action="">
            <button onClick={ changeFile } type="button">Изменить фото</button>
            <fieldset className='mt'>
              <input onChange={ handleChange } value={ model.name } name="name" type="text" placeholder="Ваше имя" />
            </fieldset>
            <fieldset>
              <input onChange={ handleChange } value={ model.email } name="email" type="text" placeholder="Email" />
            </fieldset>
            <fieldset>
              <input onChange={ handleChange } value={ model.telegram } name="telegram" type="text" placeholder="Телеграм" />
            </fieldset>
            <button onClick={ toggleCollapse } type="button">Изменить пароль</button>
            <Collapse isOpened={ collapse }>
              <fieldset>
                <input onChange={ handleChange } value={ model.password } name="password" type="password" placeholder="Пароль" />
              </fieldset>
              <fieldset>
                <input onChange={ handleChange } value={ model.passwordConfirm } name="passwordConfirm" type="password" placeholder="Повторите пароль" />
              </fieldset>
            </Collapse>
            <button className="btn" type='button'>Сохранить</button>
          </form>
        </div>
      </div>
    </UserwayLayout>
  )

}

export default ProfilePage