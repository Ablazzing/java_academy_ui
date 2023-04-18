import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { setShoppingCart } from '@/store'
import { useBasket } from './contexts/basket'
import { useEffect } from 'react'

export const Basket = () => {

  const shoppingCart = useSelector(state => state.app.shoppingcart)
  const dispatch = useDispatch()
  const { basket, toggleBasket } = useBasket([])
  const close = (e) => e.target.classList.contains('basket') && toggleBasket()
  const remove = async (e) => {
    await dispatch(setShoppingCart({
      type: 'remove',
      data: e
    }))
    NotificationManager.success('Модуль успешно удален из корзины')
  }

  useEffect(() => {
    if(!shoppingCart.length && basket.open) toggleBasket()
  }, [ shoppingCart ])

  return (
    <div onClick={ close } className={`basket ${ basket.open ? 'active' : '' }`}>
      <div className="content">
        <button onClick={ () => toggleBasket() } className="close" type="button">
          <svg><use xlinkHref="/theme/sprite.svg#close"></use></svg>
        </button>
        <Link href="/userway" className="logo">
          <img src="/theme/logo_dark.svg" alt="" />
        </Link>
        <div className="title">Корзина</div>
        <div className="items">
        {shoppingCart.map((e, i) => {
          return <div className="item" key={ i } >
            <span>{ e.russianName }</span>
            <span>{ e.price } ₽</span>
            {e.newPrice && <span> { e.newPrice } ₽</span>}
            <button onClick={ () => remove(e.name) } type="button">
              <svg><use xlinkHref="/theme/sprite.svg#close"></use></svg>
            </button>
          </div>
        })}
        </div>
        <button className="btn st4 submit" type="button">Оплатить 35 000 ₽</button>
      </div>
      <NotificationContainer />
    </div>
  )
  
}

