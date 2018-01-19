import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Login from './../../components/Login';
import login from './../../model/login';

const store = createStore(login);

let rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <Login />
    </Provider>,
    rootElement
);