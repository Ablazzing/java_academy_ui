import { NavLink } from 'react-router-dom'
import Icon from './Icon'


const TopBar = ({ back, data }) => {
  return (
    <section className="topbar">
      <NavLink to="/" className="back">
        <Icon name="arrow" />
        <span>{ back }</span>
      </NavLink>
      {data && <NavLink to={ data.link } className="data">{ data.label }</NavLink>}
    </section>
  )
}

export default TopBar