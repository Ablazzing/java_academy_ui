import Link from 'next/link'

const HeaderComponent = () => {

  return (
    <header>
      <div className="wrap">
        <Link href="/" className="logo">
          <img src="/theme/img/logo.svg" alt="" />
        </Link>
        <ul>
          <li><Link href="/projects">Проекты</Link></li>
          <li><Link href="/modules">Модули</Link></li>
          <li><Link href="/tests">Тесты</Link></li>
          <li><Link href="/solutions">Проверка решений</Link></li>
          <li><Link href="/notifications">Создать уведомление</Link></li>
          <li><Link href="/access">Открыть доступ к модулю</Link></li>
        </ul>
        <button type="button">Выход</button>
      </div>
    </header>
  )
  
}

export default HeaderComponent
