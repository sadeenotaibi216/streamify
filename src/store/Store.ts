import { combineReducers, configureStore } from "@reduxjs/toolkit";

import myListReducer from "./MyListSlice";
import themeReducer from "./ThemeSlice";
import languageReducer from "./ LanguageSlice";

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

import storage from "redux-persist/es/storage";

const rootReducer = combineReducers({
  theme: themeReducer,
  language: languageReducer,
  myList: myListReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  rootReducer
);

const store = configureStore({
  reducer: persistedReducer,

  middleware: function (getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    });
  },
});

const persistor = persistStore(store);

export { store, persistor };