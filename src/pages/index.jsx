import { useEffect } from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { mainSwiperConfig, slideToBox } from '@/utils'
import { useLoader } from '@/components/contexts/loader'
import { AppLayout } from '@/components/layout'
import { mainPageContent } from '@/content'


const HomePage = () => {

  const { closeLoader } = useLoader()
  
  useEffect(() => {
    setTimeout(() => closeLoader(), 800)
  }, [])

  return (
    <AppLayout title='Java' description='' keywords=''>
      <div className="wrap container">
        <section className="first">
          <div className="info">
            <h1 id="first_screen_title" dangerouslySetInnerHTML={{ __html: mainPageContent.first.title }} />
            <div className="desc">
              <p dangerouslySetInnerHTML={{ __html: mainPageContent.first.desc }} />
              <Link className="btn st3" href="/signin" dangerouslySetInnerHTML={{ __html: mainPageContent.first.btn }} />
            </div>
            <ul className="nav">
              <li>
                <button onClick={ () => slideToBox('about') } className="btn st2" type="button">
                  <span dangerouslySetInnerHTML={{ __html: mainPageContent.first.navs[0] }} />
                </button>
              </li>
              <li>
                <button onClick={ () => slideToBox('advantages') } className="btn st2" type="button">
                  <span dangerouslySetInnerHTML={{ __html: mainPageContent.first.navs[1] }} />
                </button>
              </li>
              <li>
                <button onClick={ () => slideToBox('reviews') } className="btn st2" type="button">
                  <span dangerouslySetInnerHTML={{ __html: mainPageContent.first.navs[2] }} />
                </button>
              </li>
              <li>
                <button onClick={ () => slideToBox('prices') } className="btn st2" type="button">
                  <span dangerouslySetInnerHTML={{ __html: mainPageContent.first.navs[3] }} />
                </button>
              </li>
            </ul>
          </div>
        </section>
        <section className="second" data-scroll-target="about" data-scroll-offset="80">
          <div className="boxtitleindex" dangerouslySetInnerHTML={{ __html: mainPageContent.second.title }} />
          <ul className="desc">
            <li dangerouslySetInnerHTML={{ __html: mainPageContent.second.desc[0] }} />
            <li dangerouslySetInnerHTML={{ __html: mainPageContent.second.desc[1] }} />
            <li dangerouslySetInnerHTML={{ __html: mainPageContent.second.desc[2] }} />
          </ul>
          <div className="task">
            <div className="title" dangerouslySetInnerHTML={{ __html: mainPageContent.second.subtitle }} />
            <div className="desc" dangerouslySetInnerHTML={{ __html: mainPageContent.second.subDesc }} />
          </div>
        </section>
        <section className="third">
          <div className="desc" dangerouslySetInnerHTML={{ __html: mainPageContent.third.subtitle }} />
          <div className="boxtitleindex" dangerouslySetInnerHTML={{ __html: mainPageContent.third.title }} />
          <div className="actions">
            <div className="title" dangerouslySetInnerHTML={{ __html: mainPageContent.third.subtitle }} />
            <ul>
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.actions.title }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.actions.desc[0] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.actions.desc[1] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.actions.desc[2] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.actions.desc[3] }} />
            </ul>
          </div>
          <div className="results">
            <div className="title" dangerouslySetInnerHTML={{ __html: mainPageContent.third.results.title }} />
            <div className="info">
              <ul>
                <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.results.desc[0] }} />
                <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.results.desc[1] }} />
                <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.results.desc[2] }} />
                <li dangerouslySetInnerHTML={{ __html: mainPageContent.third.results.desc[3] }} />
              </ul>
            </div>
          </div>
        </section>
        <section className="fourth">
          <div className="author">
            <div className="info">
              <div className="boxtitleindex" dangerouslySetInnerHTML={{ __html: mainPageContent.fourth.title }} />
              <div className="desc" dangerouslySetInnerHTML={{ __html: mainPageContent.fourth.desc }} />
            </div>
            <div className="img">
              <img src={ mainPageContent.fourth.photo } alt="" />
            </div>
          </div>
        </section>
        <section className="fifth">
          <div className="boxtitleindex" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.title }} />
          <div className="advantages" data-scroll-target="advantages" data-scroll-offset="-40">
            <div className="boxtitleindex" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.advantages.title }} />
            <ul>
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.advantages.desc[0] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.advantages.desc[1] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.advantages.desc[2] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.advantages.desc[3] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.advantages.desc[4] }} />
              <li dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.advantages.desc[5] }} />
            </ul>
          </div>
          <div className="reviews" data-scroll-target="reviews" data-scroll-offset="-60">
            <div className="boxtitleindex" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.reviews.title }} />
            <div className="swiperbox">
              <Swiper navigation={ mainSwiperConfig.navigation } pagination={ mainSwiperConfig.pagination } modules={ mainSwiperConfig.modules } effect={ 'fade' } >
                <SwiperSlide>
                  <div className="main">
                    <div className="img">
                      <img src={ mainPageContent.fifth.reviews.slides[0].photo } alt="" />
                    </div>
                    <div className="author">
                      <div className="info" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.reviews.slides[0].name }} />
                      <a href="" target="_blank">
                        <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
                      </a>
                    </div>
                  </div>
                  <div className="review" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.reviews.slides[0].desc }} />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main">
                    <div className="img">
                      <img src={ mainPageContent.fifth.reviews.slides[1].photo } alt="" />
                    </div>
                    <div className="author">
                      <div className="info" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.reviews.slides[1].name }} />
                      <a href="" target="_blank">
                        <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
                      </a>
                    </div>
                  </div>
                  <div className="review" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.reviews.slides[1].desc }} />
                </SwiperSlide>
                <SwiperSlide>
                  <div className="main">
                    <div className="img">
                      <img src={ mainPageContent.fifth.reviews.slides[2].photo } alt="" />
                    </div>
                    <div className="author">
                      <div className="info" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.reviews.slides[2].name }} />
                      <a href="" target="_blank">
                        <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
                      </a>
                    </div>
                  </div>
                  <div className="review" dangerouslySetInnerHTML={{ __html: mainPageContent.fifth.reviews.slides[2].desc }} />
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
          <div className="boxtitleindex" dangerouslySetInnerHTML={{ __html: mainPageContent.sixth.title }} />
          <ul className="info">
            <li dangerouslySetInnerHTML={{ __html: mainPageContent.sixth.desc[0] }} />
            <li dangerouslySetInnerHTML={{ __html: mainPageContent.sixth.desc[1] }} />
          </ul>
          <div className="desc" dangerouslySetInnerHTML={{ __html: mainPageContent.sixth.subDesc }} />
          <Link href="/signin" className="btn st3">
            <svg><use xlinkHref="/theme/sprite.svg#logo"></use></svg>
            { mainPageContent.sixth.btn }
          </Link>
        </section>
      </div>
    </AppLayout>
  )
}

export default HomePage
