import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Register from './../../components/Register';
import registerStore from './../../store/registerStore';
import registerSaga from './../../saga/registerSaga';

const store = registerStore();
store.runSage(registerSaga);
let rootElement = document.getElementById('register');

if (rootElement) {
    render(
        <Provider store={store}>
            <Register />
        </Provider>,
        rootElement
    );
}
