import { useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mainSwiperConfig, slideToBox } from '@/utils'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'


const HomePage = () => {

  const { setLoader } = useApp()

  useEffect(() => {
    setTimeout(() => setLoader(false), 800)
  }, [])

  return (
    <AppLayout title='Java' description='' keywords=''>
      <div className="wrap container">
        <section className="first">
          <div className="info">
            <h1 id="first_screen_title">
              <span>Становись</span>
              <span>
                <strong><i>&#123;</i><span>Java</span><i>&#125;</i></strong>
                <span>-разработчиком</span>
              </span>
              <span>вместе с нами</span>
            </h1>
            <div className="desc">
              <p>Получи классную, востребованную < br />профессию и зарабатывай дома <br />в удобное время</p>
              <Link className="btn st3" href="/signin">Начать учиться</Link>
            </div>
            <ul className="nav">
              <li>
                <button onClick={ () => slideToBox('about') } className="btn st2" type="button">
                  Об обучении
                </button>
              </li>
              <li>
                <button onClick={ () => slideToBox('advantages') } className="btn st2" type="button">
                  Преимущества
                </button>
              </li>
              <li>
                <button onClick={ () => slideToBox('reviews') } className="btn st2" type="button">
                  Отзывы
                </button>
              </li>
              <li>
                <button onClick={ () => slideToBox('prices') } className="btn st2" type="button">
                  Ценовая политика
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="second" data-scroll-target="about" data-scroll-offset="80">
          <div className="boxtitleindex">Об обучении</div>
          <ul className="desc">
            <li>
              <p className="title"><strong>Перед тобой онлайн платформа посвященная java разработĸе.</strong></p>
              <p>Курс состоит из частей, или по другому — модулей.</p>
              <p>Каждый модуль состоит из видео-лекций, теста и глобального проекта.</p>
            </li>
            <li>
              <p><strong>Проект</strong> - это большая задача, которую ты делаешь сам и отправляешь свой код на проверку куратора. Ведь невозможно стать программистом, не практикуясь!</p>
            </li>
            <li>
              <p>Куратор дает тебе <strong>обратную связь</strong> по твоему решению. Такой подход дает тебе, с одной стороны самостоятельную практику, с другой стороны помогает тебе улучшить твой код.</p>
            </li>
          </ul>
          <div className="task">
            <div className="title">Твоя задача:</div>
            <div className="desc">посмотреть видео-лекции, пройти итоговый <br />тест и написать свое решение проекта.</div>
          </div>
        </section>
        <section className="third">
          <div className="desc">Теперь у тебя есть все инструменты <br />для становления разработчиком в будущем!</div>
          <div className="boxtitleindex">Пройдешь все модули <span>и вперед на собеседования!</span></div>
          <div className="actions">
            <div className="title">Твои действия</div>
            <ul>
              <li>смотришь леĸции<i></i></li>
              <li>решаешь задачу<i></i></li>
              <li>делаешь проект<i></i></li>
              <li>отправляешь куратору<i></i></li>
              <li>получаешь обратную связь</li>
            </ul>
          </div>
          <div className="results">
            <div className="title">Ты получишь:</div>
            <div className="info">
              <ul>
                <li>пожизненный доступ ĸ видеоуроĸам</li>
                <li>чат для учениĸов</li>
                <li>бесценная праĸтиĸа на реальных задачах</li>
                <li>все необходимое для трудоустройства</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="fourth">
          <div className="author">
            <div className="info">
              <div className="boxtitleindex">Кто создал Академию?</div>
              <div className="desc">
                <p>Юрий Молодыко — действующий java разработчик в Банке "ВТБ". Опыт работы в IT индустрии 9 лет. </p>
                <p>За свою карьеру работал в крупнейших финансовых организациях: Сбербанк, Россгострах, Финансовая корпорация Открытие. Начинал с должности экономиста, поэтому не понаслышке знает о всех трудностях перехода из одной профессии в другую.</p>
              </div>
            </div>
            <div className="img">
              <img src="/images/author.jpg" alt="" />
            </div>
          </div>
        </section>
        <section className="fifth">
          <div className="boxtitleindex">
            <span>При создании АКадемии учтены</span>
            <span>все теКущие требования</span>
            <span>работодателей России</span>
          </div>
          <div className="advantages" data-scroll-target="advantages" data-scroll-offset="-40">
            <div className="boxtitleindex">Преимущества</div>
            <ul>
              <li>Учись в своем ритме: пожизненный доступ ĸ материалам. 12 месяцев на сдачу проеĸта.</li>
              <li>Понятная схема обучения: прошел все модули -&gt; готов ĸ собеседованию.</li>
              <li>Возможность спросить в чате учениĸов в любой момент времени.</li>
              <li>Реальный опыт разработĸи под ĸураторством действующего разработчиĸа.</li>
              <li>Плати тольĸо за те модули, ĸоторые тебе нужны. При поĸупĸе всех модулей сĸидĸа 50%.</li>
              <li>Постоянное увеличение ĸоличества полезных материалов.</li>
            </ul>
          </div>
          <div className="reviews" data-scroll-target="reviews" data-scroll-offset="-60">
            <div className="boxtitleindex">Отзывы</div>
            <div className="swiperbox">
              <Swiper navigation={ mainSwiperConfig.navigation } pagination={ mainSwiperConfig.pagination } modules={ mainSwiperConfig.modules } effect={ 'fade' } >
                <SwiperSlide>
                  <div className="main">
                    <div className="img">
                      <img src="/images/review.jpg" alt="" />
                    </div>
                    <div className="author">
                      <div className="info">
                        <span>Иван Иванов1</span>
                        <span>25 лет</span>
                      </div>
                      <a href="" target="_blank">
                        <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
                      </a>
                    </div>
                  </div>
                  <div className="review">
                    <p>1Хотел поблагодарить Юрия и курсы программирования JavaByAblazzing, который дал прекрасный старт помогающий освоить мир Java разработки. Хочу ометить высокую профессиональную подготовку лектора, и крайнюю заинтересованность в своих учениках. Очень понравилось что на все интресующие вопросы и возникшие трудности, тебе обязательно ответят и дадут развернутый ответ. Так же хочу отметить интересные практические задания, дающие в полной мере реализовать теоритические знания. Ну и конечно же ламповый чат с другими учениками курса, в котором можно обсудить насущные проблемы и завести отличных коллег и товарищей)). Могу точно сказать что благодаря данным курсам я получил много недостающих знаний и закрыл пробелы в уже имеющихся.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="main">
                    <div className="img">
                      <img src="/images/review.jpg" alt="" />
                    </div>
                    <div className="author">
                      <div className="info">
                        <span>Иван Иванов2</span>
                        <span>25 лет</span>
                      </div>
                      <a href="" target="_blank">
                        <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
                      </a>
                    </div>
                  </div>
                  <div className="review">
                    <p>2Хотел поблагодарить Юрия и курсы программирования JavaByAblazzing, который дал прекрасный старт помогающий освоить мир Java разработки. Хочу ометить высокую профессиональную подготовку лектора, и крайнюю заинтересованность в своих учениках. Очень понравилось что на все интресующие вопросы и возникшие трудности, тебе обязательно ответят и дадут развернутый ответ. Так же хочу отметить интересные практические задания, дающие в полной мере реализовать теоритические знания. Ну и конечно же ламповый чат с другими учениками курса, в котором можно обсудить насущные проблемы и завести отличных коллег и товарищей)). Могу точно сказать что благодаря данным курсам я получил много недостающих знаний и закрыл пробелы в уже имеющихся.</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main">
                    <div className="img">
                      <img src="/images/review.jpg" alt="" />
                    </div>
                    <div className="author">
                      <div className="info">
                        <span>Иван Иванов3</span>
                        <span>25 лет</span>
                      </div>
                      <a href="" target="_blank">
                        <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
                      </a>
                    </div>
                  </div>
                  <div className="review">
                    <p>3Хотел поблагодарить Юрия и курсы программирования JavaByAblazzing, который дал прекрасный старт помогающий освоить мир Java разработки. Хочу ометить высокую профессиональную подготовку лектора, и крайнюю заинтересованность в своих учениках. Очень понравилось что на все интресующие вопросы и возникшие трудности, тебе обязательно ответят и дадут развернутый ответ. Так же хочу отметить интересные практические задания, дающие в полной мере реализовать теоритические знания. Ну и конечно же ламповый чат с другими учениками курса, в котором можно обсудить насущные проблемы и завести отличных коллег и товарищей)). Могу точно сказать что благодаря данным курсам я получил много недостающих знаний и закрыл пробелы в уже имеющихся.</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="navigation">
                <div className="swipernav prev">
                  <svg><use xlinkHref="/theme/sprite.svg#swiper_prev"></use></svg>
                </div>
                <div className="swipernav next">
                  <svg><use xlinkHref="/theme/sprite.svg#swiper_next"></use></svg>
                </div>
              </div>
              <div className="pagination"></div>
            </div>
          </div>
        </section>
        <section className="sixth" data-scroll-target="prices" data-scroll-offset="-20">
          <div className="boxtitleindex">Ценовая политика</div>
          <ul className="info">
            <li>
              <p>Стоимость модуля составляет от <strong>2499 ₽</strong> до <strong>4999 ₽</strong></p>
            </li>
            <li>
              <p>Спец цена при одновременной поĸупĸе всех модулей:</p>
              <p>
                <span>70 000 ₽</span>
                <strong>35 000 ₽</strong>
              </p>
            </li>
          </ul>
          <div className="desc">
            <p>Согласись, <br />35 000 за новую профессию — это выгодная сделĸа!</p>
          </div>
          <Link href="/signin" className="btn st3">
            <svg><use xlinkHref="/theme/sprite.svg#logo"></use></svg>
            Начать учиться
          </Link>
        </section>
      </div>
    </AppLayout>
  )
}

export default HomePage
