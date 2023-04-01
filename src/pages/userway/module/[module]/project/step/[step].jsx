import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { appApi } from '@/repositories'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'
import { Teacher } from '@/components/teacher'

const StepPage = () => {

  const router = useRouter()
  const [ module, setModule ] = useState({})
  const [ error, setError ] = useState(false)
  const { setLoader } = useApp()
  const loadPageData = async () => {
    const tempModule = await appApi().modules.getModule({
      slug: router.query.module
    })
    if(tempModule) {
      const project = await appApi().projects.getProject({
        slug: router.query.module
      })
      if(project) {
        tempModule.project = project
        setModule(tempModule)
      }
    }
    if(tempModule && (!tempModule.stepsData || !tempModule.stepsData[router.query.step])) {
      const step = await appApi().projects.getStep({
        slug: router.query.module,
        step: router.query.step
      })
      console.log(step)
    }
    if(!tempModule || !tempModule.project) setError(true)
    setLoader(false)
  }
  
  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title={ error ? 'Этап не найден' : module?.project?.projectInfo?.russianName }>
      <div className="wrap container step">
        <Topbar />
        {!error && 
          <div className="flexcontent">
            <div className="main">
              <div className="boxshadow">
                <div className="pagetitle">
                  <h1>Проект Тоyota</h1>
                  <span className='label'>Этап 1</span>
                  <span className="badge red">Отклонен</span>
                </div>
                <div className="subtitle">
                  <span>Модуль</span>
                  <Link href="/userway">SQL</Link>
                </div>
              </div>
              <div className="boxtitle">Описание этапа</div>
              <div className="boxshadow">
                <div className="body">
                  <p>На этом проекте с тобой создадим приложение, которое будет эмулировать весь процесс производства и продажи компании Toyota.</p>
                  <p>Первым делом мы пойдем в конструкторское бюро! Нам нужно будет создать несколько новых моделей машины, описать их свойства: такие как цвет, количество сидений, максимальная скорость и так далее. Но мало того, что описать их свойства, нужно описать еще и детали, из которых они будут состоять!</p>
                  <p>Когда мы закончим с деталями, нам нужно будет реализовать функции каждой модели: езду, торможение, включение разных датчиков, если что то пойдет не так!</p>
                </div>
              </div>
              <div className="boxtitle">Требования</div>
              <ul className="list">
                <li className="boxshadow">Создать новый проект</li>
                <li className="boxshadow">Создать новый репозиторий на гитхабе, связанный с этим проектом</li>
                <li className="boxshadow">
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
                <li className="boxshadow">
                  Для легковых авто характерно наличие круиз контроля, и возможности включить или выключить его.
                  <br />Для кабриолета характерно возможность опустить или поднять крышу ( следовательно и состояние этой крыши)
                  <br />Для грузового фургона есть дополнительный параметр - грузоподъемность (количество килограмм)
                  <br />Для модели camry характерно наличие usb (функция подключить музыку)
                  <br />Для модели solara характерно наличие мини холодильника (функция охладить напиток)
                  <br />Для модели hiance характерно наличие запасного колеса
                  <br />Для модели dyna характерно наличие розетки (функция зарядить телефон)
                </li>
                <li className="boxshadow">Необходимо создать класс Runner и в нем создать все модели, и проверить работоспособность всех методов.</li>
              </ul>
              <div className="boxtitle">Решение</div>
              <div className="boxshadow">
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
              <div className="boxshadow">
                <form className='item' action="">
                  <label htmlFor="field">Отправь ссылку на GitHub </label>
                  <fieldset>
                    <input type="text" placeholder="http://" id="field"/>
                    <button className="btn st4" type="button">Отправить решение</button>
                  </fieldset>
                </form>
              </div>
            </div>
            <Teacher />
          </div> || 
          <div className="pagetitle">
            <h1>Этап не найден</h1>
          </div>
        }
      </div>
    </AppLayout>
  )

}

export default StepPage