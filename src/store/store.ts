import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { articleApi } from '@/slces/article/article';
import { articlesSlice } from '@/slces/allArticles/allArticles';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  PersistConfig,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['articles'],
};

const rootReducer = combineReducers({
  articles: articlesSlice.reducer,
  [articleApi.reducerPath]: articleApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(articleApi.middleware),
});

export type TypeRootState = ReturnType<typeof rootReducer>;
export const persistor = persistStore(store);
