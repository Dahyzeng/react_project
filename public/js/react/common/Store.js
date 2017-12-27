import { combineReducers, createStore } from "redux";

function reduce (state = {}, action) {
    switch(action.type) {
        case 'LOGIN': 
        return Object.assign({}, state, {
            message: 'login success!'
        });
        default: return state;
    }
}

function reduce2 (state = {}, action) {
    switch(action.type) {
        case 'LOGIN-2': 
        return Object.assign({}, state, {
            message: 'login success!'
        });
        default: return state;
    }
}

export default createStore(combineReducers({reduce, reduce2}));