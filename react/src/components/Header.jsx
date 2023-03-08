import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { getAssetsPath } from '../utils'
import Icon from "./Icon"

const Header = () => {
  const refModal = useRef()
  const [modal, setModal] = useState({
    status: false,
    className: 'basket'
  })
  const toggleModal = (e) => {
    if(modal.status) {
      if(!e || e.target.classList.contains('basket')) {
        setModal({status: false, className: 'basket active'})
        setTimeout(() => {
          setModal({status: false, className: 'basket'})
        }, 200)
      }
    } else {
      setModal({status: true, className: 'basket active'})
      setTimeout(() => {
        setModal({status: true, className: 'basket active open'})
      }, 200)
    }
  }
  const closeModal = () => refModal.current.click()
  return (
    <header className="main">
      <div className="wrap">
        <NavLink to={ '/' } className="logo">
          <img src={ getAssetsPath('img/logo.svg') } alt="" />
        </NavLink>
        <ul>
          <li>
            <button onClick={ toggleModal } type="button">
              <span className="label">Корзина</span>
              <span className="badge">1</span>
            </button>
          </li>
          <li>
            <button type="button">
              <span className="label">Уведомления</span>
              <span className="badge">2</span>
            </button>
          </li>
          <li>
            <NavLink to={ '/' }>
              <img src={ getAssetsPath('img/avatar.jpg') } alt="" />
            </NavLink>
          </li>
        </ul>
      </div>
      <div onClick={ toggleModal } ref={ refModal } className={ modal.className }>
        <div className="content">
          <button onClick={ closeModal } className="close" type="button">
            <Icon name="close" />
          </button>
          <a href="/" className="logo">
            <img src={ getAssetsPath('img/logo_auth.svg') } alt="" />
          </a>
          <div className="title">Корзина</div>
          <div className="items">
            <div className="item">
              <span>Все курсы</span>
              <span>70 000 ₽</span>
              <span>35 000 ₽</span>
              <button type="button">
                <Icon name="close" />
              </button>
            </div>
            <div className="item">
              <span>Все курсы</span>
              <span>70 000 ₽</span>
              <span>35 000 ₽</span>
              <button type="button">
                <Icon name="close" />
              </button>
            </div>
          </div>
          <button className="btn submit" type="button">Оплатить 35 000 ₽</button>
        </div>
      </div>
    </header>
  )
}

export default Header