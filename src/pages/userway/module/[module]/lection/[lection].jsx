import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react'
import * as moment from 'moment'
import { appApi } from '@/repositories'
import { lectionSwiperConfig } from '@/utils'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { Topbar } from '@/components/topbar'
import { CommentForm } from '@/components/commentform'

const LectionPage = () => {

  const router = useRouter()
  const [ error, setError ] = useState(false)
  const [ answer, setAnswer ] = useState(null)
  const [ module, setModule ] = useState({})
  const [ comments, setComments ] = useState([])
  const { closeLoader } = useLoader()
  const updateComments = async (closeAnswer) => {
    closeAnswer && setAnswer(null)
    const comments = await appApi().comments.getVideoComments({
      videoName: router.query.lection
    })
    comments && setComments(comments)
  }
  const selectComment = (e) => {
    const commentBox = document.querySelector(`[data-comment="${ e }"]`)
    if(commentBox) {
      window.scrollBy({
        top: commentBox.getBoundingClientRect().top,
        behavior: 'smooth'
      })
      commentBox.classList.add('selected')
      setTimeout(() => commentBox.classList.remove('selected'), 1000)
    }
  }
  const loadPageData = async () => {
    const tempModule = await appApi().modules.getModule({
      moduleName: router.query.module
    })
    if(tempModule) {
      const project = await appApi().projects.getProject({
        moduleName: router.query.module
      })
      if(project) tempModule.project = project
    }
    if(tempModule && tempModule.project) {
      const video = await appApi().videos.getVideo({
        moduleName: router.query.module,
        videoName: router.query.lection
      })
      if(video) tempModule.video = video
    }
    if(tempModule && tempModule.project && tempModule.video) {
      const comments = await appApi().comments.getVideoComments({
        videoName: router.query.lection
      })
      comments && setComments(comments)
      setModule(tempModule)
    }
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
            
            <div className="boxshadow">
              <div className="title">Описание</div>
              <div className="desc" dangerouslySetInnerHTML={{ __html: module?.video?.description }} />
            </div>
            <div className="boxshadow">
              <div className="title">Комментарий</div>
              <div className="desc">Если есть вопрос, можно написать куратору, или оставить его прямо здесь:</div>
                <CommentForm id={ null } update={ updateComments } />
                <div className="history">
                <div className="title">История сообщений</div>
                {comments.map((e, i) => {
                  return <div className="item" key={ i } data-comment={ e.id }>
                    <div className="label">
                      <span>{ e.username }</span>
                      { e.usernameAnswer && 
                        <button onClick={() => selectComment(e.baseCommentId) } type="button">
                          Ответ { e.usernameAnswer }
                        </button>
                      }
                      <button onClick={ () => setAnswer(answer === e.id ? null : e.id) } type="button">
                        {answer === e.id ? 'Скрыть форму ответа' : 'Ответить'}
                      </button>
                    </div>
                    <div className="info">
                      <div className="text">{ e.text }</div>
                      <div className="date">{ moment(e.createdDate).format('HH:mm DD.MM.YYYY') }</div>
                    </div>
                    {answer === e.id && 
                      <CommentForm id={ e.id } update={ updateComments }/>
                    }
                  </div>
                })}
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


/*
<div className="swiperbox">
              <Swiper navigation={ lectionSwiperConfig.navigation } modules={ lectionSwiperConfig.modules } >
                <SwiperSlide>
                  <iframe src={`https://www.youtube.com/embed/${module.video?.url}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
*/