// pages/_app.tsx
'use client';
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app-wrapper">
      <Component {...pageProps} />
    </div>
  )
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false
});