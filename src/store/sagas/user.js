import {takeLatest, put, call} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
    SIGN_IN_REQUEST,
    SIGN_IN_REQUEST_SUCCESS,
    SIGN_IN_REQUEST_FAIL,

    REGISTER_REQUEST,
    REGISTER_REQUEST_SUCCESS,
    REGISTER_REQUEST_FAIL,

    GET_USER_INFO_REQUEST,
    GET_USER_INFO_REQUEST_SUCCESS,
    GET_USER_INFO_REQUEST_FAIL,

    GET_USERS_LIST_REQUEST,
    GET_USERS_LIST_REQUEST_SUCCESS,
    GET_USERS_LIST_REQUEST_FAIL,

    CREATE_TRANSACTION_REQUEST,
    CREATE_TRANSACTION_REQUEST_SUCCESS,
    CREATE_TRANSACTION_REQUEST_FAIL,

    GET_TRANSACTION_LIST_REQUEST,
    GET_TRANSACTION_LIST_REQUEST_SUCCESS,
    GET_TRANSACTION_LIST_REQUEST_FAIL

} from "../actions";
import * as api from '../../api';

function* signIn(action) {
    try {
        const {data} = yield call(api.signIn, action.payload.data);
        yield put({
            type: SIGN_IN_REQUEST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        const {data} = e.response;
        if (action.payload.cb) action.payload.cb({_error: data});
        // if (action.payload.cb) action.payload.cb(data.errors);
        yield put({
            type: SIGN_IN_REQUEST_FAIL,
            message: e.message
        })
    }
}
function* register(action) {
    try {
        const {data} = yield call(api.register, action.payload.data);
        yield put({
            type: REGISTER_REQUEST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        const {data} = e.response;
        if (action.payload.cb) action.payload.cb({_error: data});
        yield put({
            type: REGISTER_REQUEST_FAIL,
            message: e.message
        })
    }
}
function* getUserInfo() {
    try {
        const {data} = yield call(api.getUserInfo);
        yield put({
            type: GET_USER_INFO_REQUEST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        const {data} = e.response;
        yield put({
            type: GET_USER_INFO_REQUEST_FAIL,
            message: data
        })
    }
}
function* getUsersList(action) {
    try {
        const {data} = yield call(api.getUsersList, action.payload.data);
        yield put({
            type: GET_USERS_LIST_REQUEST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        const {data} = e.response;
        if (action.payload.cb) action.payload.cb({_error: data});
        yield put({
            type: GET_USERS_LIST_REQUEST_FAIL,
            message: data
        })
    }
}
function* createTransaction(action) {
    try {
        const {data} = yield call(api.createTransaction, action.payload.data);
        if (action.payload.cb) action.payload.cb();
        yield put({
            type: CREATE_TRANSACTION_REQUEST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        const {data} = e.response;
        if (action.payload.cb) action.payload.cb({_error: data});
        yield put({
            type: CREATE_TRANSACTION_REQUEST_FAIL,
            message: data
        })
    }
}
function* getTransactionList() {
    try {
        const {data} = yield call(api.getTransactionList);
        yield put({
            type: GET_TRANSACTION_LIST_REQUEST_SUCCESS,
            payload: {data}
        })

    } catch (e) {
        const {data} = e.response;
        yield put({
            type: GET_TRANSACTION_LIST_REQUEST_FAIL,
            message: data
        })
    }
}

export default function* watcher() {
    yield takeLatest(SIGN_IN_REQUEST, signIn);
    yield takeLatest(REGISTER_REQUEST, register);
    yield takeLatest(GET_USER_INFO_REQUEST, getUserInfo);
    yield takeLatest(GET_USERS_LIST_REQUEST, getUsersList);
    yield takeLatest(CREATE_TRANSACTION_REQUEST, createTransaction);
    yield takeLatest(GET_TRANSACTION_LIST_REQUEST, getTransactionList);
}