import { useApp } from '@/components/contexts'
import { useOffers } from './contexts/offers'
import { mainPageContent } from '@/content'

export const Footer = () => {
  
  const { state } = useApp()
  const { toggleOffers } = useOffers()
  
  return (
    <>
    {
      state.section === 'index' && 
      <footer className="index">
        <div className="info">
          <div className="boxtitle big" dangerouslySetInnerHTML={{ __html: mainPageContent.footer.title }} />
          <div className="boxtitle big">
            { mainPageContent.footer.desc }
            <a href="" className="btn st3">
              <svg><use xlinkHref="/theme/sprite.svg#telegram"></use></svg>
              { mainPageContent.footer.btn }
            </a>
          </div>
        </div>
        <div className="btnbox">
          <button onClick={ () => toggleOffers() } type="button" dangerouslySetInnerHTML={{ __html: mainPageContent.footer.offers }} />
        </div>
      </footer>
      || state.section === 'userway' && 
      <footer className="userway">
        <div className="wrap">
          <button onClick={ () => toggleOffers() } type="button">
            Договор оферты
          </button>
        </div>
      </footer>
    }
    </>
  )
  
}
