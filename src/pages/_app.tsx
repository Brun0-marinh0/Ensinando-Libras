import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'


import Navbar from '../components/Navbar'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [statusNavBar, setStatusNavbar] = useState(true)

  useEffect(() => {
    if (router.asPath == "/") {
      setStatusNavbar(!statusNavBar)
    }
  }, [])

  return (
    <>
      {statusNavBar ? <Navbar /> : null}
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
