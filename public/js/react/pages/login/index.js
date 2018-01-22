import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Login from './../../components/Login';
import store from './../../common/store';
import loginSaga from './../../saga/loginSaga';
import loginReducer from './../../reducer/login';

const loginStore = store(loginReducer);
loginStore.runSage(loginSaga);

let rootElement = document.getElementById('root');
if (rootElement) {
    render(
        <Provider store={loginStore}>
            <Login />
        </Provider>,
        rootElement
    );
}
