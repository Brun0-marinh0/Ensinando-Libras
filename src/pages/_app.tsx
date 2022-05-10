import { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

import '../styles/global.scss'

function MyApp({ Component, pageProps }:AppProps) {
  return(
    <>
      <Navbar/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
