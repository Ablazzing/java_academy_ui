import Head from 'next/head'
import Link from 'next/link'
import UserwayLayout from '@/layouts/userway'
import TopBar from '@/components/Topbar'
import Teacher from '@/components/Teacher'

const ProjectPage = () => {

  return (
    <UserwayLayout>
      <Head>
        <title>Project</title>
      </Head>
      
      <div className="wrap container project">
        <TopBar back="Назад" />
        <div className="flexcontent">
          <div className="main boxshadow">
            <div className="pagetitle">
              <h1>Проект Тоyota</h1>
              <span className="badge orange">В работе</span>
            </div>
            <div className="subtitle">
              <span>Модуль</span>
              <Link href="/userway">SQL</Link>
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
                <Link href="/userway">Этап 1</Link>
                <svg><use xlinkHref="/theme/sprite.svg#module_check_round"></use></svg>
                <span className='gray'>Принят</span>
              </li>
              <li>
                <Link href="/userway">Этап 2</Link>
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
      </div>
    </UserwayLayout>
  )

}

export default ProjectPage