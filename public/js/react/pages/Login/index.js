import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Login from './../../components/Login';
import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginReducer from './../../model/login';
import loginSaga from './../../saga/loginSaga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

const store = createStore(loginReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(loginSaga);
let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <Login />
    </Provider>,
    rootElement
);