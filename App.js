import React from 'react';
import Router from './App/Routes';
import {NavigationContainer} from '@react-navigation/native';
import {onLoadFont} from './App/assets/fonts'
import { Provider } from 'react-redux'
import rootReducer from './App/Store'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistGate } from 'redux-persist/integration/react'

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
  whitelist:['user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store =  createStore(persistedReducer);
const persistor = persistStore(store)


export default App = () => {
  const loaded = onLoadFont()

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Router />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
