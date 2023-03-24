import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { dispatchEvent, removeEvent } from '@/utils'
import AuthLayout from '@/layouts/auth'

const ForgotPasswordPage = () => {

  useEffect(() => {
    dispatchEvent('stopLoader')
    return () => {
      removeEvent('stopLoader')
    }
  }, [])

  return (
    <AuthLayout>
      <Head>
        <title>Восстановление пароля</title>
        <meta name="description" content="SEO description" />
        <meta name="keywords" content="SEO keywords" />
      </Head>

      <form action="">
        <Link href="/" className="logo">
          <img src="/theme/img/logo_dark.svg" alt="" />
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
    </AuthLayout>
  )

}

export default ForgotPasswordPage