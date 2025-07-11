// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { persistStore, persistReducer } from "redux-persist"; // localStorage
import { combineReducers } from "redux";
import storageSession from "redux-persist/lib/storage/session";

const rootReducer = combineReducers({
  user: userReducer,
});

const persistConfig = {
  key: "root",
  storage: storageSession,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
