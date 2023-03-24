import { useEffect, useState } from 'react'
import Link from 'next/link'
import { addEvent } from '@/utils'

const Basket = () => {
  
  const [state, setState] = useState('basket')
  const close = (e) => e.target.classList.contains('basket') && setState('basket')
  useEffect(() => addEvent('openBasket', () => setState('basket active')), [])

  return (
    <div onClick={ close } className={ state }>
      <div className="content">
        <button onClick={ () => setState('basket') } className="close" type="button">
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
