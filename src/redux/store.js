import React from "react";
import { createStore } from "redux";
import { reducer } from "./reducer";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  }
  
  const persistedReducer = persistReducer(persistConfig, reducer)
  
   const store = createStore(persistedReducer)
   const persistor = persistStore(store)

   export {store, persistor};
