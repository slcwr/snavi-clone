// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
   
    <div className="app-wrapper">
      <Component {...pageProps} />
    </div>
    
  )
}

export default MyApp