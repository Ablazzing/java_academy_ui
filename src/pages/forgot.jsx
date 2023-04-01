import { useEffect } from 'react'
import Link from 'next/link'
import { useApp } from '@/components/context'
import { AppLayout } from '@/components/layout'

const ForgotPasswordPage = () => {

  const { setLoader } = useApp()

  useEffect(() => {
    router.isReady && setTimeout(() => setLoader(false), 350)
  }, [ router.isReady ])

  return (
    <AppLayout title='Восстановление пароля'>
      <form action="">
        <Link href="/" className="logo">
          <img src="/theme/logo_dark.svg" alt="" />
        </Link>
        <div className="pagetitle"><h1>Забыли пароль?</h1></div>
        <div className="desc">Мы пришлем на почту инструкцию для восстановления пароля</div>
        <fieldset>
          <input type="text" placeholder="Ваш email" />
        </fieldset>
        <button className="btn st3 mt" type="submit">Восстановить пароль</button>
        <div className="actions mt">
          <Link href="/signin"><strong>Вспомнил пароль</strong></Link>
        </div>
      </form>
    </AppLayout>
  )

}

export default ForgotPasswordPage