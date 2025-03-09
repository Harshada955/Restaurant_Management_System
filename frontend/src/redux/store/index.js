import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "../reducer/commonReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage
import { combineReducers } from "redux";

const persistConfig = {
  key: "root", // The key under which state will be stored in localStorage
  storage,
};

// Combine reducers if you have multiple reducers
const rootReducer = combineReducers({
  common: commonReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store); // Create a persistor instance

export default store;
