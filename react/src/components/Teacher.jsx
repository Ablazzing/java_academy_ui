import { getAssetsPath } from '../utils'
import Icon from '../components/Icon'

const Teacher = () => {
  return (
    <div className="teacher">
      <div className="boxtitle">Мой куратор</div>
      <div className="desc">
        <span>В любой непонятной ситуации - пиши</span>
        <a href="/"><Icon name="telegram"></Icon></a>
      </div>
      <div className="user">
        <div className="ava">
          <img src={ getAssetsPath('img/teacher.jpg') } alt="" />
        </div>
        <div className="name">Константин Константинопольский</div>
      </div>
    </div>
  )
}

export default Teacher