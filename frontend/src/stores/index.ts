import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/CounterSlice";
import { cartReducer } from "./reducers/CartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector  } from "react-redux";
import { Store, StoreRounded } from "@mui/icons-material";

export const store = configureStore({
    reducer: {
      counters: counterReducer,
      cart: cartReducer,
    },
});

  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;



export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;