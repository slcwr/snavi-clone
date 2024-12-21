'use client'
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store} from ".";

type StoreProviderprops = {
  children: ReactNode;
};

export default function StoreProvider({
  children,
}: Readonly<StoreProviderprops>) {
  return (
    <>
    <Provider store={store}>{children}</Provider>
    </>
  );
}
