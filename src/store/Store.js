import { combineReducers, configureStore } from "@reduxjs/toolkit";
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

import themeReducer from "./ThemeSlice";
// 1. FIXED: Imported your language reducer (adjust path if needed)
import languageReducer from "./LanguageSlice"; 
import storage from "redux-persist/es/storage";

// 2. Combined both reducers under one single root
const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer, 
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// 3. This now handles persistence for BOTH theme and language together
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  // 4. FIXED: Passed the unified persisted reducer here
  reducer: persistedReducer, 

  middleware: function (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };
