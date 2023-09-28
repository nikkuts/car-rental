import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { advertsReducer } from './adverts/slice';

const persistConfig = {
    key: 'root', // ключ для збереження стану
    storage, // сховище, де буде зберігатися стан (localStorage, AsyncStorage тощо)
    whitelist: ['adverts'], // список редукторів, які слід зберігати
  };

const persistedReducer = persistReducer(persistConfig, advertsReducer);

export const store = configureStore({
  reducer: {
    adverts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);