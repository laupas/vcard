import type { AppProps } from 'next/app'
import  './_base.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
