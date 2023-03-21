import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu } from '@/store/StoreApp'
import { slideToBox } from '@/utils'

const MobileMenu = () => {

  const router = useRouter()
  const dispatch = useDispatch()
  const isMenuActive = useSelector(state => state.app.mobileMenu)
  const closeMenu = () => dispatch(toggleMobileMenu())
  const routeTo = (e) => {
    e.preventDefault()
    closeMenu()
    setTimeout(() => router.push(e.target.href), 350)
  }
  const slideTo = (e) => {
    closeMenu()
    slideToBox(e)
  }

  return (
    <nav className={ isMenuActive ? 'open mobile' : 'mobile' }>
      <ul>
        <li>
          <a onClick={ routeTo } href="/">
            <img src="/theme/img/logo.svg" alt="" />
          </a>
        </li>
        <li>
          <button onClick={ () => slideTo('about') } type="button">
            Об обучении
          </button>
        </li>
        <li>
          <button onClick={ () => slideTo('advantages') } type="button">
            Преимущества
          </button>
        </li>
        <li>
          <button onClick={ () => slideTo('reviews') } type="button">
            Отзывы
          </button>
        </li>
        <li>
          <button onClick={ () => slideTo('prices') } type="button">
            Ценовая политика
          </button>
        </li>
        <li>
          <a onClick={ routeTo } href="/signin" className="btn st1">
            Вход
          </a>
        </li>
        <li>
          <a onClick={ routeTo } href="/signup" className="btn st1">
            Регистрация
          </a>
        </li>
      </ul>
    </nav>
  )

}

export default MobileMenu