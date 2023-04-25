import type { AppProps } from 'next/app'
import { globalstyles } from '../styles/global'
import { SessionProvider } from 'next-auth/react'

globalstyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
