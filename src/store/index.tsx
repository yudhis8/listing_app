//  @flow

import authReducer from './auth/reducer';

import React from 'react';
import {compose, createStore, applyMiddleware, combineReducers} from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(rootReducer);

// Export persistore for PersistGate component
// export const persistor = persistStore(store);
