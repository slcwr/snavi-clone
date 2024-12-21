// pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/globals.scss'
import StoreProvider from '@/stores/StoreProvider';
import dynamic from "next/dynamic";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="app-wrapper">
      <StoreProvider>
      <Component {...pageProps} />
      </StoreProvider>
    </div>
  )
}

//export default App
export default dynamic(() => Promise.resolve(App), {
  ssr: false
});