import { useEffect, useState } from 'react'
import Link from 'next/link'
import { NotificationContainer, NotificationManager } from 'react-notifications'
import { useDispatch, useSelector } from 'react-redux'
import { setShoppingCart } from '@/store'
import { useBasket } from './contexts/basket'

export const Basket = () => {

  const [ price, setPrice ] = useState(0)
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
    let total = 0
    shoppingCart.map(e => {
      total += e.price
    })
    setPrice(total)
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
            <span className={ e.newPrice ? 'new' : ''}> { e.newPrice ? e.newPrice + ' ₽' : '' }</span>
            <span className={ e.newPrice ? 'old' : 'new'}>{ e.price } ₽</span>
            <button onClick={ () => remove(e.name) } type="button">
              <svg><use xlinkHref="/theme/sprite.svg#close"></use></svg>
            </button>
          </div>
        })}
        </div>
        <button className="btn st4 submit" type="button">Оплатить { price } ₽</button>
      </div>
      <NotificationContainer />
    </div>
  )
  
}

