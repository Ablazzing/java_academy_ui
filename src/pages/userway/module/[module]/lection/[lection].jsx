import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { Swiper, SwiperSlide } from 'swiper/react'
import { appApi } from '@/repositories'
import { lectionSwiperConfig } from '@/utils'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'
import { messages } from '@/lang'

const LectionPage = () => {

  const router = useRouter()
  const [ module, setModule ] = useState({})
  const [ error, setError ] = useState(false)
  const { closeLoader } = useLoader()
  /*
  const form = useFormik({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().required(messages.user.email.nf).email(messages.user.email.nv),
      password: Yup.string().required(messages.user.pass.nf)
    }),
    onSubmit: async (values, { resetForm }) => {
      loading.current = 'disabled'
      const response = await appApi().auth.signin(values)
      if(response) {
        resetForm()
        const route = (response.isAdmin || response.isModerator) ? '/admin' : '/userway'
        router.push(route)
      } else {
        NotificationManager.error(messages.user.errors.auth)
      }
      loading.current = null
    }
  })
  */
  const loadPageData = async () => {
    const tempModule = await appApi().modules.getModule({
      slug: router.query.module
    })
    if(tempModule) {
      const project = await appApi().projects.getProject({
        slug: router.query.module
      })
      if(project) tempModule.project = project
    }
    if(tempModule && tempModule.project) {
      const video = await appApi().videos.getVideo({
        slug: router.query.module,
        video: router.query.lection
      })
      if(video) {
        tempModule.video = video
        setModule(tempModule)
        console.log(tempModule)
      }
    }
    /*
    if(tempModule && tempModule.project && tempModule.video) {
      const comments = await appApi().comments.getVideoComments({
        slug: router.query.module,
        video: router.query.lection
      })
      
    }
    */
    if(!tempModule || !tempModule.project || !tempModule.video) setError(true)
    closeLoader()
  }

  useEffect(() => {
    router.isReady && loadPageData()
  }, [ router.isReady ])

  return (
    <AppLayout title={ error ? 'Лекция не найдена' : `${ module.video?.russianName }` }>
      <div className="wrap container lection">
        <Topbar data={{ label: module.russianName, link: `/userway/module/${ module.name }` }}/>
        {!error && 
          <>
            <div className="pagetitle"><h1>{ module.video?.russianName }</h1></div>
            <div className="swiperbox">
              <Swiper navigation={ lectionSwiperConfig.navigation } modules={ lectionSwiperConfig.modules } >
                <SwiperSlide>
                  <iframe src="https://www.youtube.com/embed/ef-nTwaVjnc" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                  <button className="btn st4" type="button">Отправить</button>
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
          </>
          || 
          <div className="pagetitle">
            <h1>Лекция не найдена</h1>
          </div>
        }
      </div>
    </AppLayout>
  )

}

export default LectionPage