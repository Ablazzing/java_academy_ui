import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mainSwiperConfig } from '@/utils'
import { appApi } from '@/repositories'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'

const TestPage = () => {
  
  const refSwiper = useRef()
  const router = useRouter()
  const [ loading, setLoading ] = useState(false)
  const [ error, setError ] = useState(false)
  const [ module, setModule ] = useState({test: {}})
  const [ model, setModel ] = useState({})
  const { closeLoader } = useLoader()
  const loadPageData = async () => {
    const tempModule = await appApi().modules.getModule({
      slug: router.query.module
    })
    if(tempModule) {
      const test = await appApi().tests.getTest({
        slug: router.query.module
      })
      if(test) {
        tempModule.test = test
        const modelData = {}
        for(let i = 0; i < test.questions.length; i++) {
          modelData[i] = 0
        }
        setModel(modelData)
        setModule(tempModule)
        console.log(tempModule)
      }
    }
    if(!tempModule || !tempModule.test) setError(true)
    if(!error) refSwiper.current.swiper.update()
    closeLoader()
  }
  const handleChange = (e) => {
    setModel({ ... model, ... {[e.target.getAttribute('data-key')]: parseInt(e.target.value)}})
  }
  const submit = async () => {
    setLoading(true)
    const values = {
      answers: [],
      moduleInfo: module.name
    }
    for(const e in model) {
      values.answers.push({
        number: module.test.questions[e].number,
        text: module.test.questions[e].text,
        isRight: module.test.questions[e].answers[model[e]].isRight
      })
    }
    const response = await appApi().tests.sendTest(values)
    console.log(response)
    setLoading(false)
  }
  
  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title={ error ? 'Тест не найден' : `${ module.test.title }` }>
      <div className="wrap container test">
        <Topbar data={{ label: module.russianName, link: `/userway/module/${ module.name }` }}/>
        {!error && 
          <>
            <div className="pagetitle"><h1>{ module.test.title }</h1></div>
            { module.test.description && 
              <div className="desctitle">{ module.test.description }</div>
            }
            <div className="swiperbox">
              <Swiper navigation={ mainSwiperConfig.navigation } modules={ mainSwiperConfig.modules } autoHeight={ true } ref={ refSwiper } >
              { module.test.questions?.map((e, i) => {
                return <SwiperSlide key={ i }>
                  <div className="title">Вопрос { e.number }</div>
                  <div className="desc">{ e.text }</div>
                  <div className="variants">
                    <div className="title">Варианты ответа:</div>
                    <div className="items">
                    {e.answers.map((answer, id) => {
                      return <div className="item" key={ id }>
                        <input onChange={ handleChange } checked={ model[i] == id } name={`v${i}`} value={id} id={`v${i}_${id}`} data-key={i} type="radio" />
                        <label htmlFor={`v${i}_${id}`}>
                          <span>{ answer.text }</span>
                        </label>
                      </div>
                    })}
                    </div>
                  </div>
                </SwiperSlide>
              })}
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
            <button onClick={ submit } className={`btn st4 ${loading ? 'disabled' : ''}`} type='button'>
              Завершить тест
            </button>
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
          </> || 
          <div className="pagetitle">
            <h1>Тест не найден</h1>
          </div>
        }
      </div>
    </AppLayout>
  )

}

export default TestPage