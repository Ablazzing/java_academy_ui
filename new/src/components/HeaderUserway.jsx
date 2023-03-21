import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { toggleBasket } from '@/store/StoreApp'

const HeaderUserway = () => {
  
  const dispatch = useDispatch()

  return (
    <header className="userway">
      <div className="wrap">
        <Link href="/userway" className="logo">
          <img src="/theme/img/logo_inner.svg" alt="" />
        </Link>
        <ul>
          <li>
            <button onClick={ () => dispatch(toggleBasket()) } className="link" type="button">
              <span className="label">Корзина</span>
              <span className="badge red">1</span>
            </button>
          </li>
          <li>
            <Link href="/userway/notifications" className="link">
              <span className="label">Уведомления</span>
              <span className="badge red">2</span>
            </Link>
          </li>
          <li>
            <Link href="/userway/profile" className="profile">
              {
                true && <svg><use xlinkHref="/theme/sprite.svg#avatar"></use></svg>
                || <img src="/images/avatar.jpg" alt="" />
              }
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderUserway
