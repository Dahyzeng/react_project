import { createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function store(reducer) {
    const sagaMiddleware = createSagaMiddleware();
    return {
        ...createStore(reducer, applyMiddleware(sagaMiddleware)),
        runSage: sagaMiddleware.run
    }
} ;