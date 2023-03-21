import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import TopBar from '../components/TopBar'
import Icon from '../components/Icon'
import 'swiper/css'

const PageLection = () => {
  const modules = [ Navigation ]
  const navigationBtns = {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  }
  document.title = 'Lection'
  return (
    <main className="container wrap lection">
      <TopBar back="Назад" data={{ label: 'Структуры данных +Stream api', link: '/' }}/>
      <div className="pagetitle"><h1>Iterable</h1></div>
      <div className="swiperbox">
        <Swiper navigation={ navigationBtns } modules={ modules } >
          <SwiperSlide>
            <button type="button">
              <Icon name="play" />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">
              <Icon name="play" />
            </button>
          </SwiperSlide>
          <SwiperSlide>
            <button type="button">
              <Icon name="play" />
            </button>
          </SwiperSlide>
        </Swiper>
        <div className="navigation">
          <button className="swipernav prev">
            <Icon name="arrow_swiper" />
          </button>
          <button className="swipernav next">
            <Icon name="arrow_swiper" />
          </button>
        </div>
      </div>
      <div className="boxshadow">
        <div className="title">Описание</div>
        <div className="desc">
          <p>В данной лекции мы разберем с вами Iterable. Он позваляет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы прямо во время итерирования.</p>
          <p><NavLink to="/">Ссылка на код</NavLink></p>
        </div>
      </div>
      <div className="boxshadow">
        <div className="title">Комментарий</div>
        <div className="desc">Если есть вопрос, можно написать куратору, или оставить его прямо здесь:</div>
          <form action="">
          <fieldset><textarea name=""></textarea></fieldset>
          <button className="btn" type="button">Отправить</button>
          </form>
          <div className="history">
          <div className="title">История сообщений</div>
          <div className="item">
            <div className="label">Вы спросили</div>
            <div className="info">
              <div className="text">А как исправить это и это</div>
              <div className="date">10:50 10.01.23</div>
            </div>
          </div>
          <div className="item">
            <div className="label">Константин</div>
            <div className="info">
              <div className="text">Посмотрите внимательно по ссылке</div>
              <div className="date">10:50 10.01.23</div>
            </div>
          </div>
          </div>
      </div>
    </main>
  )
}

export default PageLection