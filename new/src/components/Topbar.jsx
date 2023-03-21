import Link from 'next/link'

const TopBar = ({ back, data }) => {
  return (
    <section className="topbar">
      <Link href="/userway" className="back">
        <svg><use xlinkHref="/theme/sprite.svg#arrow"></use></svg>
        <span>{ back }</span>
      </Link>
      {data && <Link href={ data.link } className="data">{ data.label }</Link>}
    </section>
  )
}

export default TopBar