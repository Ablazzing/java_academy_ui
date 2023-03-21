import { NavLink } from 'react-router-dom'
import TopBar from '../components/TopBar'

const PageNotify = () => {
  document.title = 'Notify'
  return (
    <main className="container wrap notify">
      <TopBar back="На главную"/>
      <div className="pagetitle"><h1>Уведомления</h1></div>
      <ul>
        <li className='new'>
          <div className="date">10.01.2023</div>
          <div className="info">
            <p>Проект Тоyota (Этап 1 ) принят</p>
          </div>
        </li>
        <li>
          <div className="date">09.01.2023</div>
          <div className="info">
            <p>Проект Тоyota (Этап 2) отклонен.</p>
            <p><NavLink to="/">Посмотреть комментарий к проекту</NavLink></p>
          </div>
        </li>
        <li>
          <div className="date">09.01.2023</div>
          <div className="info">
            <p>Вам написали комментарий к теме Java / Булево. </p>
            <p><NavLink to="/">Посмотреть комментарий</NavLink></p>
          </div>
        </li>
        <li>
          <div className="date">09.01.2023</div>
          <div className="info">
            <p>Уведомляем вас, что изменились правила пользования сервисом. </p>
            <p><NavLink to="/">Подробнее</NavLink></p>
          </div>
        </li>
      </ul>
    </main>
  )
}

export default PageNotify