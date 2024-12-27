import { Cart } from "../../../../components/organisms/Cart";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../../../stores';


export default function CartComponent() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Cart />
    </PersistGate>
  );
};