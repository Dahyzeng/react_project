import "babel-polyfill";
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import request from './../common/request';

function* callRegister (action) {
    const response = yield call(request, '/user/save', {body: action.payload, method: 'POST'});
    if (response.success) {
        yield put({
            type: 'view',
            payload: { ...action.payload, isOk: true}
        })
    }

}

function* watchGetPosts() {
    yield takeEvery('register', callRegister);
}

// root saga
export default function* rootSaga() {
    yield watchGetPosts()
}