import { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { removeProfile } from '@/store'
import { appApi } from '@/repositories'
import { useApp } from '@/components/contexts'
import { useMenu } from '@/components/contexts/menu'
import { useBasket } from '@/components/contexts/basket'

export const Header = () => {
  
  const dispatch = useDispatch()
  const profile = useSelector(state => state.app.profile)
  const notify = useSelector(state => state.app.notify)
  const basketData = useSelector(state => state.app.basket)
  const { state } = useApp()
  const { menu, toggleMenu } = useMenu()
  const { toggleBasket } = useBasket()

  useEffect(() => {
    if(state.section === 'userway') appApi().notify.getCount()
  }, [ state.section ])

  return (
    <header className={ state.section }>
      <div className={ state.section === 'index' ? 'box' : 'wrap' }>
        <Link href={ state.section === 'index' ? '/' : state.section === 'userway' ? '/userway' : '/admin' } className="logo">
          <img src={`/theme/${state.section === 'index' ? 'logo' : 'logo_inner'}.svg`} alt=""/>
        </Link>
        {
          state.section === 'index' && 
          <ul className="auth">
            <li>
              <Link href="/signin" className="btn st1">Вход</Link>
            </li>
            <li>
              <Link href="/signup" className="btn st1">Регистрация</Link>
            </li>
            <li>
              <button onClick={ () => toggleMenu() } className={ menu ? 'open' : '' } type="button">
                <span></span>
              </button>
            </li>
          </ul>
          || state.section === 'userway' && 
          <ul>
            <li>
              <button onClick={ () => toggleBasket() } className="link" type="button">
                <span className="label">Корзина</span>
                <span className="badge red">{ basketData.length }</span>
              </button>
            </li>
            <li>
              <Link href="/userway/notifications" className="link">
                <span className="label">Уведомления</span>
                <span className="badge red">{ notify }</span>
              </Link>
            </li>
            <li>
              <Link href="/userway/profile" className="profile">
                {
                  !profile?.profileImage && <svg><use xlinkHref="/theme/sprite.svg#avatar"></use></svg>
                  || 
                  <img src={`data:image/jpeg;base64,${profile?.profileImage?.data}`} />
                }
              </Link>
            </li>
            <li>
              <button onClick={ () => dispatch(removeProfile()) } className="link" type="button">
                <span className="label">Выход</span>
              </button>
            </li>
          </ul>
          || state.section === 'admin' && 
          <>
            <ul>
              <li><Link href="/admin/projects">Проекты</Link></li>
              <li><Link href="/admin/modules">Модули</Link></li>
              <li><Link href="/admin/tests">Тесты</Link></li>
              <li><Link href="/admin/solutions">Проверка решений</Link></li>
              <li><Link href="/admin/notifications">Создать уведомление</Link></li>
              <li><Link href="/admin/access">Открыть доступ к модулю</Link></li>
            </ul>
            <button onClick={ () => dispatch(removeProfile()) } type="button">Выход</button>
          </>
        }
      </div>
    </header>
  )
  
}