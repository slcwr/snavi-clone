import { Cart } from "../../components/organisms/Cart";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../../stores';

function CartComponent() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Cart/>
    </PersistGate>
  );
}