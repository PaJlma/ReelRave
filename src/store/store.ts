import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: rootReducer,
});

export type TState = ReturnType<typeof store.getState>;
export type TDispatch = ReturnType<typeof store.dispatch>;