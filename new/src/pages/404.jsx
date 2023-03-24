import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { Collapse } from 'react-collapse'
import { dispatchEvent, removeEvent } from '@/utils'
import UserwayLayout from '@/layouts/userway'
import Teacher from '@/components/Teacher'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import WayRepository from '@/repositories/way'

const PageError404 = () => {

  return (
    <UserwayLayout>
      <Head>
        <title>404</title>
      </Head>

      <div className="wrap container error">
        <div className="pagetitle">
          <h1>Страница не найдена</h1>
        </div>
        404
      </div>
    </UserwayLayout>
  )

}

export default PageError404