import { NavLink } from 'react-router-dom'
import { getAssetsPath } from '../utils'

const PageAuthForgot = () => {
  return (
    <main className="container auth">
      <form action="">
        <NavLink to="/" className="logo">
          <img src={ getAssetsPath('img/logo_auth.svg') } alt="" />
        </NavLink>
        <div className="title">Забыли пароль?</div>
        <div className="desc">Мы пришлем на почту инструкцию для восстановления пароля</div>
        <fieldset>
          <input type="text" placeholder="Ваш email" />
        </fieldset>
        <button className="btn mt" type="submit">Восстановить пароль</button>
        <div className="actions mt">
          <NavLink to="/signin"><strong>Вспомнил пароль</strong></NavLink>
        </div>
      </form>
    </main>
  )
}

export default PageAuthForgot