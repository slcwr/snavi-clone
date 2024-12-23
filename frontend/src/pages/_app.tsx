// pages/_app.tsx
import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import { PersistGate } from 'redux-persist/integration/react';
import StoreProvider from '@/stores/StoreProvider';
import { persistor } from '../stores';


const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <PersistGate loading={null} persistor={persistor}>
        <div className="app-wrapper">
          <Component {...pageProps} />
        </div>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
