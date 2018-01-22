import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Login from './../../components/Login';
import loginStore from './../../store/loginStore';
import loginSaga from './../../saga/loginSaga';

const store = loginStore();
store.runSage(loginSaga);
let rootElement = document.getElementById('root');
if (rootElement) {
    render(
        <Provider store={store}>
            <Login />
        </Provider>,
        rootElement
    );
}
