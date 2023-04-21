import Link from 'next/link'
import { useRouter } from 'next/router'

export const Topbar = ({ data }) => {

  const router = useRouter()

  console.log(router)
  return (
    <section className="topbar">
      <button onClick={ () => router.back() } className="back" type="button">
        <svg><use xlinkHref="/theme/sprite.svg#arrow"></use></svg>
        <span>Назад</span>
      </button>
      {data && <Link href={ data.link } className="data">{ data.label }</Link>}
    </section>
  )

}
