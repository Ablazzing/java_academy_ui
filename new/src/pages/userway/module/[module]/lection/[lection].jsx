import Head from 'next/head'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import UserwayLayout from '@/layouts/userway'
import Topbar from '@/components/TopBar'

const LectionPage = () => {

  const modules = [ Navigation ]
  const navigationBtns = {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  }

  return (
    <UserwayLayout>
      <Head>
        <title>Lection</title>
      </Head>
      
      <div className="wrap container lection">
        <Topbar data={{ label: 'Структуры данных +Stream api', link: '/' }}/>
        <div className="pagetitle"><h1>Iterable</h1></div>
        <div className="swiperbox">
          <Swiper navigation={ navigationBtns } modules={ modules } >
            <SwiperSlide>
              <button type="button">
                <svg><use xlinkHref="/theme/sprite.svg#play"></use></svg>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button type="button">
                <svg><use xlinkHref="/theme/sprite.svg#play"></use></svg>
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button type="button">
                <svg><use xlinkHref="/theme/sprite.svg#play"></use></svg>
              </button>
            </SwiperSlide>
          </Swiper>
          <div className="navigation">
            <button className="swipernav prev">
              <svg><use xlinkHref="/theme/sprite.svg#swiper_prev"></use></svg>
            </button>
            <button className="swipernav next">
              <svg><use xlinkHref="/theme/sprite.svg#swiper_next"></use></svg>
            </button>
          </div>
        </div>
        <div className="boxshadow">
          <div className="title">Описание</div>
          <div className="desc">
            <p>В данной лекции мы разберем с вами Iterable. Он позваляет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы прямо во время итерирования.</p>
            <p><Link href="/">Ссылка на код</Link></p>
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
      </div>
    </UserwayLayout>
  )

}

export default LectionPage