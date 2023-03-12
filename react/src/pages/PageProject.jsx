import { NavLink } from 'react-router-dom'
import TopBar from '../components/TopBar'
import Teacher from '../components/Teacher'
import Icon from '../components/Icon'

const PageProject = () => {
  document.title = 'Project'
  return (
    <main className="container wrap project">
      <TopBar back="Назад" />
      <div className="flexcontent">
        <div className="main boxshadow">
          <div className="pagetitle">
            <h1>Проект Тоyota</h1>
            <span className="badge orange">В работе</span>
          </div>
          <div className="subtitle">
            <span>Модуль</span>
            <NavLink to="/">SQL</NavLink>
          </div>
          <div className="body">
            <div className="title">Описание этапа</div>
            <div className="text">
              <p>На этом проекте с тобой создадим приложение, которое будет эмулировать весь процесс производства и продажи компании Toyota.</p>
              <p>Первым делом мы пойдем в конструкторское бюро! Нам нужно будет создать несколько новых моделей машины, описать их свойства: такие как цвет, количество сидений, максимальная скорость и так далее. Но мало того, что описать их свойства, нужно описать еще и детали, из которых они будут состоять!</p>
              <p>Когда мы закончим с деталями, нам нужно будет реализовать функции каждой модели: езду, торможение, включение разных датчиков, если что то пойдет не так!</p>
            </div>
          </div>
          <ul className="steps">
            <li>
              <NavLink to="/">Этап 1</NavLink>
              <Icon name="module_check_round"/>
              <span className='gray'>Принят</span>
            </li>
            <li>
              <NavLink to="/">Этап 2</NavLink>
              <span className='dark'>Ожидает решения</span>
            </li>
            <li>
              <span className="access">Этап 3</span>
              <span className='gray'>Откроется после выполнения предыдущих этапов</span>
            </li>
            <li>
              <span className="access">Этап 4</span>
              <span className='gray'>Откроется после выполнения предыдущих этапов</span>
            </li>
          </ul>
        </div>
        <Teacher />
      </div>
    </main>
  )
}

export default PageProject