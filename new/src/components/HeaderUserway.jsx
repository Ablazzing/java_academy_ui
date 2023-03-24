import { useEffect } from 'react'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '@/store/StoreUser'
import { dispatchEvent } from '@/utils'
import ProfileRepository from '@/repositories/profile'

const HeaderUserway = () => {

  const profile = useSelector(state => state.user.profile)
  const dispatch = useDispatch()
  const notifications = useSelector(state => state.user.notificationsCount)
  const basket = useSelector(state => state.user.basket)
  useEffect(() => {
    ProfileRepository.getNotificationsCount()
  }, [])

  return (
    <header className="userway">
      <div className="wrap">
        <Link href="/userway" className="logo">
          <img src="/theme/img/logo_inner.svg" alt="" />
        </Link>
        <ul>
          <li>
            <button onClick={ () => dispatchEvent('openBasket') } className="link" type="button">
              <span className="label">Корзина</span>
              <span className="badge red">{ basket.length }</span>
            </button>
          </li>
          <li>
            <Link href="/userway/notifications" className="link">
              <span className="label">Уведомления</span>
              <span className="badge red">{ notifications }</span>
            </Link>
          </li>
          <li>
            <Link href="/userway/profile" className="profile">
              {
                !profile.profileImage && <svg><use xlinkHref="/theme/sprite.svg#avatar"></use></svg>
                || <img src={`data:image/jpeg;base64,${profile.profileImage.data}`} />
              }
            </Link>
          </li>
          <li>
            <button onClick={ () => dispatch(signOut()) } className="link" type="button">
              <span className="label">Выход</span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
  
}

export default HeaderUserway
