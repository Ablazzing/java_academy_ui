import { useRouter } from 'next/router'
import { slideToBox } from '@/utils'
import { useMenu } from '@/components/contexts/menu'

export const Menu = () => {

  const router = useRouter()
  const { menu, toggleMenu } = useMenu()
  const action = (type, target) => {
    toggleMenu()
    switch(type) {
      case 'route':
        setTimeout(() => router.push(target), 350)
        break
      case 'slide':
        slideToBox(target)
        break
    }
  }

  return (
    <nav className={ `mobile ${ menu ? 'open' : '' }` }>
      <ul>
        <li>
          <button onClick={ () => action(null, null) } type="button">
            <img src="/theme/logo.svg" alt="" />
          </button>
        </li>
        <li>
          <button onClick={ () => action('slide', 'about') } type="button">
            Об обучении
          </button>
        </li>
        <li>
          <button onClick={ () => action('slide', 'advantages') } type="button">
            Преимущества
          </button>
        </li>
        <li>
          <button onClick={ () => action('slide', 'reviews') } type="button">
            Отзывы
          </button>
        </li>
        <li>
          <button onClick={ () => action('slide', 'prices') } type="button">
            Ценовая политика
          </button>
        </li>
        <li>
          <a onClick={ () => action('route', '/signin') } className="btn st1" type="button">
            Вход
          </a>
        </li>
        <li>
          <a onClick={ () => action('route', '/signup') } className="btn st1" type="button">
            Регистрация
          </a>
        </li>
      </ul>
    </nav>
  )

}
