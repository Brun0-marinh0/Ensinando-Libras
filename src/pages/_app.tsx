import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'




import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter()

  const [statusNavBar, setStatusNavbar] = useState(true)

 

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
