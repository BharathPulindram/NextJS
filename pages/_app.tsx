//Global styles should be include in this file
import '../styles/globals.css';
import {ThemeProvider} from 'styled-components';

const theme = {
  colors:{
    primary:'#55C7D'
  }
}

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    </ThemeProvider>
}
