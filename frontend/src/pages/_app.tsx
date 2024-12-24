// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import StoreProvider from '@/stores/StoreProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <div className="app-wrapper">
        <Component {...pageProps} />
      </div>
    </StoreProvider>
  );
};

export default App;
