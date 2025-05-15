import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { leadDataSlice } from "@component/leadform/slice";

import userReducer from "@component/login/slice";
import { combineReducers } from "redux";

const persistConfig = {
  key: "leadData",
  storage,
};
const persistedReducer = persistReducer(persistConfig, leadDataSlice.reducer);

const leadDataPersistConfig = {
  key: "leadData",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};

const rootReducer = combineReducers({
  leadData: persistReducer(leadDataPersistConfig, leadDataSlice.reducer),
  user: persistReducer(userPersistConfig, userReducer),
});

export const store = configureStore({
  reducer: {
    rootReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export const clearPersistedState = () => {
  persistor.purge();
};

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
