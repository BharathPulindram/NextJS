//Global styles should be include in this file
import '/styles/globals.css';
//import {ThemeProvider} from 'styled-components';
import '../styles/layout.css'
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import Navbar from '@/layout/Navbar';
import '@/layout/Navbar.css'

/* const theme = {
  colors:{
    primary:'#55C7D'
  }
} */

import type { AppProps } from 'next/app'
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  if(Component.getLayoutFun){
    return Component.getLayoutFun(<Component {...pageProps} />)
  }
  return    (
      <>
     {/*  <Head>
        <title>Bharath</title>
        <meta name="description" content="next js course" />
      </Head>
      <Header/> */}
      <Navbar />
      <Component {...pageProps} />
      {/* <Footer/> */}
      </>
    )
    {/* <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider> */}
}
