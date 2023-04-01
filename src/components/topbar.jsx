import Link from 'next/link'

export const Topbar = ({ data }) => {

  return (
    <section className="topbar">
      <button className="back" type="button">
        <svg><use xlinkHref="/theme/sprite.svg#arrow"></use></svg>
        <span>Назад</span>
      </button>
      {data && <Link href={ data.link } className="data">{ data.label }</Link>}
    </section>
  )

}
