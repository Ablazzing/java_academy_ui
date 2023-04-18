import { useApp } from '@/components/contexts'
import { useOffers } from './contexts/offers'

export const Footer = () => {
  
  const { state } = useApp()
  const { toggleOffers } = useOffers()
  
  return (
    <>
    {
      state.section === 'index' && 
      <footer className="index">
        <div className="info">
          <div className="boxtitle big">Остались вопросы?</div>
          <div className="boxtitle big">
            Пиши! 
            <a href="" className="btn st3">
              <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
              Перейти в Telegram
            </a>
          </div>
        </div>
      </footer>
      || state.section === 'userway' && 
      <footer className="userway">
        <div className="wrap">
          <button onClick={ () => toggleOffers() } type="button">
            Договор офферты
          </button>
        </div>
      </footer>
    }
    </>
  )
  
}
