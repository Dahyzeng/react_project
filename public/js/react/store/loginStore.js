import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import loginReducer from '../reducer/login';

export default function loginStore() {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(loginReducer, applyMiddleware(sagaMiddleware)),
        runSage: sagaMiddleware.run
    }
} ;