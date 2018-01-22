import "babel-polyfill";
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import request from './../common/request';

function* callLogin (action) {
    const response = yield call(request, 'http://localhost:8080/user/login');
    console.log(response);
    yield put({
        type: 'login',
        payload: response
    })
}

function* watchGetPosts() {
    yield takeEvery('doLogin', callLogin);
}

// root saga
export default function* rootSaga() {
    yield watchGetPosts()
}