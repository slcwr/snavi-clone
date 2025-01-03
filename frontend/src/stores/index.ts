'use client'
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/AuthSlice";
import { cartReducer } from "./reducers/CartSlice";
import { TypedUseSelectorHook, useDispatch, useSelector  } from "react-redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from './customStorage';

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart','auth']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    //Reduxのデフォルトミドルウェアはactionやstateがシリアライズ可能
    //redux-persistはシリアライズできないデータを含むことがあるため、シリアライズチェックを無効化する
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware({
        serializableCheck:false
      })
});

  //type RootState = ReturnType<typeof store.getState>;
  type AppDispatch = typeof store.dispatch;

// persistor の作成
export const persistor = persistStore(store);


export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;