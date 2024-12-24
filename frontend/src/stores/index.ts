'use client'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./reducers/CounterSlice";
import { cartReducer } from "./reducers/CartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector  } from "react-redux";
import { Store, StoreRounded } from "@mui/icons-material";
import { persistStore, persistReducer } from "redux-persist";
import storage from './customStorage';

const rootReducer = combineReducers({
  cart: cartReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    //ReduxのデフォルトミドルウェアはactionやstateがSiriアライズ可能
    //redux-persistはシリアライズできないデータを含むことがあるため、シリアライズチェックを無効化する
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck:false
      })
    
});

  type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;

// persistor の作成
export const persistor = persistStore(store);


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
