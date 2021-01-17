import { createStore, applyMiddleware } from "redux";
import rootReducer from '../reducers/index';
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'


import rootSaga from './root-saga'

const sagaMiddleware = createSagaMiddleware()


const middlewares = [logger, sagaMiddleware]

const store = createStore(rootReducer, applyMiddleware(...middlewares));


sagaMiddleware.run(rootSaga)

const persistor = persistStore(store)

export { store, persistor };