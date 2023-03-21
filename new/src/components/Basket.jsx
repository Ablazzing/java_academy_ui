import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { toggleBasket } from '@/store/StoreApp'

const Basket = () => {

  const dispatch = useDispatch()
  const modal = useSelector(state => state.app.basket)
  
  const closeModal = (e) => {
    e.target.classList.contains('basket') && dispatch(toggleBasket())
  }

  return (
    <div onClick={ closeModal } className={ Object.keys(modal.className).join(' ') }>
      <div className="content">
        <button onClick={ () => dispatch(toggleBasket()) } className="close" type="button">
          <svg><use xlinkHref="/theme/sprite.svg#close"></use></svg>
        </button>
        <Link href="/userway" className="logo">
          <img src="/theme/img/logo_dark.svg" alt="" />
        </Link>
        <div className="title">Корзина</div>
        <div className="items">
          <div className="item">
            <span>Все курсы</span>
            <span>70 000 ₽</span>
            <span>35 000 ₽</span>
            <button type="button">
              <svg><use xlinkHref="/theme/sprite.svg#close"></use></svg>
            </button>
          </div>
          <div className="item">
            <span>Все курсы</span>
            <span>70 000 ₽</span>
            <span>35 000 ₽</span>
            <button type="button">
              <svg><use xlinkHref="/theme/sprite.svg#close"></use></svg>
            </button>
          </div>
        </div>
        <button className="btn st4 submit" type="button">Оплатить 35 000 ₽</button>
      </div>
    </div>
  )
  
}

export default Basket
