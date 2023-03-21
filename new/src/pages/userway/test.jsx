import { useEffect, useRef, useState } from 'react'
import Head from 'next/head'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import UserwayLayout from '@/layouts/userway'
import TopBar from '@/components/Topbar'

const TestPage = () => {
  
  const refSwiper = useRef()
  const modules = [ Navigation ]
  const navigationBtns = {
    nextEl: '.swipernav.next',
    prevEl: '.swipernav.prev'
  }
  const [model, setModel] = useState({
    v_1_1: false,
    v_1_2: false,
    v_1_3: false,
    v2: 'v_2_1',
    v_3_1: false,
    v_3_2: false,
    v_3_3: false,
  })
  const handleChange = (e) => setModel({ ... model, ... {[e.target.name]: e.target.value}})
  useEffect(() => {
    setTimeout(() => refSwiper.current.swiper.update(), 1)
  }, [])

  return (
    <UserwayLayout>
      <Head>
        <title>Test</title>
      </Head>
      
      <div className="wrap container test">
        <TopBar back="Назад" data={{ label: 'Структуры данных +Stream api', link: '/' }}/>
        <div className="pagetitle"><h1>Тест по структурам данных</h1></div>
        <div className="swiperbox">
          <Swiper navigation={ navigationBtns } modules={ modules } autoHeight={ true } ref={ refSwiper } >
            <SwiperSlide>
              <div className="title">Вопрос 1</div>
              <div className="desc">В данной лекции мы разберем с вами Iterable. Он позваляет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы прямо во врем</div>
              <div className="variants">
                <div className="title">Варианты ответа:</div>
                <div className="items">
                  <div className="item">
                    <input checked={ model.v_1_1 } onChange={ handleChange } name="v_1_1" type="checkbox" id="v_1_1"/>
                    <label htmlFor="v_1_1">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементыОн позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                      <svg><use xlinkHref="/theme/sprite.svg#checkbox"></use></svg>
                    </label>
                  </div>
                  <div className="item">
                    <input checked={ model.v_1_2 } onChange={ handleChange } name="v_1_2" type="checkbox" id="v_1_2" />
                    <label htmlFor="v_1_2">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                      <svg><use xlinkHref="/theme/sprite.svg#checkbox"></use></svg>
                    </label>
                  </div>
                  <div className="item">
                    <input checked={ model.v_1_3 } onChange={ handleChange } name="v_1_3" type="checkbox" id="v_1_3" />
                    <label htmlFor="v_1_3">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                      <svg><use xlinkHref="/theme/sprite.svg#checkbox"></use></svg>
                    </label>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title">Вопрос 2</div>
              <div className="desc">В данной лекции мы разберем с вами Iterable. Он позваляет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы прямо во врем</div>
              <div className="variants">
                <div className="title">Варианты ответа:</div>
                <div className="items">
                  <div className="item">
                    <input checked={ model.v2 === 'v_2_1' } onChange={ handleChange } name="v2" value="v_2_1" type="radio" id="v_2_1" />
                    <label htmlFor="v_2_1">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                    </label>
                  </div>
                  <div className="item">
                    <input checked={ model.v2 === 'v_2_2' } onChange={ handleChange } name="v2" value="v_2_2" type="radio" id="v_2_2" />
                    <label htmlFor="v_2_2">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                    </label>
                  </div>
                  <div className="item">
                    <input checked={ model.v2 === 'v_2_3' } onChange={ handleChange } name="v2" value="v_2_3" type="radio" id="v_2_3" />
                    <label htmlFor="v_2_3">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                    </label>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="title">Вопрос 3</div>
              <div className="desc">В данной лекции мы разберем с вами Iterable. Он позваляет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы прямо во врем</div>
              <div className="variants">
                <div className="title">Варианты ответа:</div>
                <div className="items">
                  <div className="item">
                    <input checked={ model.v_3_1 } onChange={ handleChange } name="v_3_1" type="checkbox" id="v_3_1" />
                    <label htmlFor="v_3_1">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                      <svg><use xlinkHref="/theme/sprite.svg#checkbox"></use></svg>
                    </label>
                  </div>
                  <div className="item">
                    <input checked={ model.v_3_2 } onChange={ handleChange } name="v_3_2" type="checkbox" id="v_3_2" />
                    <label htmlFor="v_3_2">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                      <svg><use xlinkHref="/theme/sprite.svg#checkbox"></use></svg>
                    </label>
                  </div>
                  <div className="item">
                    <input checked={ model.v_3_3 } onChange={ handleChange } name="v_3_3" type="checkbox" id="v_3_3" />
                    <label htmlFor="v_3_3">
                      <span>Он позволяет использовать класс в конструкции for each. Так же  с его помощью мы можем создавать итератор, который может удалять элементы</span>
                      <svg><use xlinkHref="/theme/sprite.svg#checkbox"></use></svg>
                    </label>
                  </div>
                </div>
              </div>
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
        <button className="btn st4" type='button'>Завершить тест</button>
        <div className="complete">
          <div className="boxshadow">
            <div className="title">Результаты теста</div>
            <div className="progressbar green">
              <span><span style={{ width: '50%' }}></span></span>
              <strong>50%</strong>
            </div>
            <div className="text">Ты отлично поработал и прошел тест. Жду на следующем модуле</div>
          </div>
          <div className="boxshadow">
            <div className="title">Результаты теста</div>
            <div className="progressbar red">
              <span><span style={{ width: '50%' }}></span></span>
              <strong>50%</strong>
            </div>
            <div className="text">Ты старался, но немного не хватило. Посмотри еще видео и все получится!</div>
          </div>
        </div>
      </div>
    </UserwayLayout>
  )

}

export default TestPage