import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '@/store/StoreApp'

const HeaderIndex = () => {

  const dispatch = useDispatch()
  const menuStatus = useSelector(state => state.app.menu)

  return (
    <header className="index">
      <div className="box">
        <Link href="/" className="logo">
          <img src="/theme/img/logo.svg" alt=""/>
        </Link>
        <ul className="auth">
          <li>
            <Link href="/signin" className="btn st1">Вход</Link>
          </li>
          <li>
            <Link href="/signup" className="btn st1">Регистрация</Link>
          </li>
          <li>
            <button onClick={ () => dispatch(toggleMenu()) } className={ menuStatus ? 'open' : '' } type="button">
              <span></span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  )
  
}

export default HeaderIndex