import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMobileMenu } from '@/store/StoreApp'

const HeaderIndex = () => {

  const isMenuActive = useSelector(state => state.app.mobileMenu)
  const dispatch = useDispatch()
  
  return (
    <header className="index">
      <div className="box">
        <Link href="" className="logo">
          <img src="/theme/img/logo.svg" alt="" />
        </Link>
        <ul className="auth">
          <li>
            <Link className="btn st1" href="/signin">
              Вход
            </Link>
          </li>
          <li>
            <Link className="btn st1" href="/signup">
              Регистрация
            </Link>
          </li>
          <li>
            <button onClick={ () => dispatch(toggleMobileMenu()) } className={ isMenuActive ? 'active' : '' } type="button">
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default HeaderIndex