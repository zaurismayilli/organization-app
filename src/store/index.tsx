import createSagaMiddleware from '@redux-saga/core';
import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './sagas';

import rootReducer from './reducers';

const store = () => {
  const sagaMiddleware = createSagaMiddleware();

  const config = legacy_createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  return config;
};

export default store;
