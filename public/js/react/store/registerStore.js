import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import registerReducer from '../reducer/register';

export default function registerStore() {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(registerReducer, applyMiddleware(sagaMiddleware)),
        runSage: sagaMiddleware.run
    }
} ;