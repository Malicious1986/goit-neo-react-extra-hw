import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { reducer as alert } from "./alert/slice";
import { reducer as authReducer } from "./auth/slice";
import { reducer as contacts } from "./contacts/slice";
import { reducer as filter } from "./filters/slice";

const tokenPersistConfig = {
  key: "token",
  storage,
  whitelist: ["token"],
};
const auth = persistReducer(tokenPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    auth,
    alert,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          "persist/PERSIST",
          "persist/REHYDRATE",
          "persist/FLUSH",
          "persist/PAUSE",
          "persist/PURGE",
          "persist/REGISTER",
        ],
      },
    }),
});

export const persistor = persistStore(store);