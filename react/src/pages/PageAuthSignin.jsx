import { NavLink } from 'react-router-dom'
import { getAssetsPath } from '../utils'

const PageAuthSignin = () => {
  return (
    <main className="container auth">
      <form action="">
        <NavLink to="/" className="logo">
          <img src={ getAssetsPath('img/logo_auth.svg') } alt="" />
        </NavLink>
        <div className="pagetitle"><h1>Вход</h1></div>
        <fieldset>
          <input type="text" placeholder="Ваш email" />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Пароль" />
        </fieldset>
        <div className="actions beetwen">
          <NavLink to="/forgot">Забыли пароль?</NavLink>
          <NavLink to="/registration">
            <strong>Регистрация</strong>
          </NavLink>
        </div>
        <button className="btn" type="submit">Войти</button>
      </form>
    </main>
  )
}

export default PageAuthSignin