import { NavLink } from 'react-router-dom'
import Icon from '../components/Icon'
import Teacher from '../components/Teacher'

const PageStep = () => {
  return (
    <main className="container wrap step">
      <NavLink to="/" className="back">
        <Icon name="arrow" />
        <span>Назад</span>
      </NavLink>
      <div className="content">
        <div className="main">
          <div className="box">
            <div className="pagetitle">
              <span>Проект Тоyota</span>
              <span className='label'>Этап 1</span>
              <span className="status red">Отклонен</span>
            </div>
            <div className="pagedesc">
              <span>Модуль</span>
              <NavLink to="/">SQL</NavLink>
            </div>
          </div>
          <div className="box">
            <div className="boxtitle">Описание этапа</div>
            <div className="body">
              <p>На этом проекте с тобой создадим приложение, которое будет эмулировать весь процесс производства и продажи компании Toyota.</p>
              <p>Первым делом мы пойдем в конструкторское бюро! Нам нужно будет создать несколько новых моделей машины, описать их свойства: такие как цвет, количество сидений, максимальная скорость и так далее. Но мало того, что описать их свойства, нужно описать еще и детали, из которых они будут состоять!</p>
              <p>Когда мы закончим с деталями, нам нужно будет реализовать функции каждой модели: езду, торможение, включение разных датчиков, если что то пойдет не так!</p>
            </div>
          </div>
          <div className="box">
            <div className="boxtitle">Требования</div>
            <div className="body clear">
              <ul className="list">
                <li>Создать новый проект</li>
                <li>Создать новый репозиторий на гитхабе, связанный с этим проектом</li>
                <li>
                  Создать 4 модели авто: camry (легковой авто), solara (кабриолет), hiance (грузовой фургон), dyna (грузовой фургон)
                  <br />Для всех машин характерны следующие атрибуты: цвет, максимальная скорость, тип коробки передач (акпп, механика, робот), в состоянии движения (да/нет).
                  <br />Машины состоят из следующих компонентов: 4 колеса, бензобак, двигатель, электрика, фары
                  <br />Каждое колесо имеет состояние - проколото или нет, диаметр (camry - 17, solara - 16, hiance - 20, dyna - 20). Колеса могут быть заменяемы, если они одинакового диаметра.
                  <br />Бензобак имеет атрибут - количество бензина
                  <br />Двигатель имеет атрибут - работоспособен
                  <br />Электрика имеет атрибут - работоспособна
                  <br />Фары имеют атрибут - работоспособны
                  <br />Цена - с центами
                </li>
                <li>
                  Для легковых авто характерно наличие круиз контроля, и возможности включить или выключить его.
                  <br />Для кабриолета характерно возможность опустить или поднять крышу ( следовательно и состояние этой крыши)
                  <br />Для грузового фургона есть дополнительный параметр - грузоподъемность (количество килограмм)
                  <br />Для модели camry характерно наличие usb (функция подключить музыку)
                  <br />Для модели solara характерно наличие мини холодильника (функция охладить напиток)
                  <br />Для модели hiance характерно наличие запасного колеса
                  <br />Для модели dyna характерно наличие розетки (функция зарядить телефон)
                </li>
                <li>Необходимо создать класс Runner и в нем создать все модели, и проверить работоспособность всех методов.</li>
              </ul>
            </div>
          </div>
          <div className="box">
            <div className="boxtitle">Решение</div>
            <div className="body">
              <div className="item">
                <div className="label">Решение</div>
                <div className="desc">
                  <span>https://githab/1351351651515</span>
                  <span>Отправлено 10:25 10.01.23</span>
                </div>
              </div>
              <div className="item">
                <div className="label">Комментарий</div>
                <div className="desc">
                  <span>Нужно исправить это и это</span>
                  <span>10:50 10.01.23</span>
                </div>
              </div>
            </div>
          </div>
          <div className="box">
            <div className="body">
              <form className='item' action="">
                <label htmlFor="field">Отправь ссылку на GitHub </label>
                <fieldset>
                  <input type="text" placeholder='http://' id="field"/>
                  <button className='btn' type='button'>Отправить решение</button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
        <Teacher />
      </div>
      <NavLink to="/" className="back bottom">
        <Icon name="arrow" />
        <span>Назад</span>
      </NavLink>
    </main>
  )
}

export default PageStep