import { NavLink } from 'react-router-dom'
import { getAssetsPath } from '../utils'

const PageAuthRegistration = () => {
  return (
    <main className="container auth">
      <form action="">
        <NavLink to="/" className="logo">
          <img src={ getAssetsPath('img/logo_auth.svg') } alt="" />
        </NavLink>
        <div className="title">Регистрация</div>
        <fieldset>
          <input type="text" placeholder="Ваш email" />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Ваше имя" />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Пароль" />
        </fieldset>
        <fieldset>
          <input type="text" placeholder="Подтверждение пароля" />
        </fieldset>
        <div className="actions">
          <span>Уже есть пароль?</span>
          <NavLink to="/signin"><strong>Войти</strong></NavLink>
        </div>
        <button className="btn" type="submit">Зарегистрироваться</button>
      </form>
    </main>
  )
}

export default PageAuthRegistration