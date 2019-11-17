export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_REQUEST_SUCCESS = 'SIGN_IN_REQUEST_SUCCESS';
export const SIGN_IN_REQUEST_FAIL = 'SIGN_IN_REQUEST_FAIL';

export const SIGN_OUT = 'SIGN_OUT';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS';
export const REGISTER_REQUEST_FAIL = 'REGISTER_REQUEST_FAIL';


export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_REQUEST_SUCCESS = 'GET_USER_INFO_REQUEST_SUCCESS';
export const GET_USER_INFO_REQUEST_FAIL = 'GET_USER_INFO_REQUEST_FAIL';

export const GET_USERS_LIST_REQUEST = 'GET_USERS_LIST_REQUEST';
export const GET_USERS_LIST_REQUEST_SUCCESS = 'GET_USERS_LIST_REQUEST_SUCCESS';
export const GET_USERS_LIST_REQUEST_FAIL = 'GET_USERS_LIST_REQUEST_FAIL';

export const CREATE_TRANSACTION_REQUEST = 'CREATE_TRANSACTION_REQUEST';
export const CREATE_TRANSACTION_REQUEST_SUCCESS = 'CREATE_TRANSACTION_REQUEST_SUCCESS';
export const CREATE_TRANSACTION_REQUEST_FAIL = 'CREATE_TRANSACTION_REQUEST_FAIL';

export const GET_TRANSACTION_LIST_REQUEST = 'GET_TRANSACTION_LIST_REQUEST';
export const GET_TRANSACTION_LIST_REQUEST_SUCCESS = 'GET_TRANSACTION_LIST_REQUEST_SUCCESS';
export const GET_TRANSACTION_LIST_REQUEST_FAIL = 'GET_TRANSACTION_LIST_REQUEST_FAIL';

export function signIn(data, cb) {
    return {
        type: SIGN_IN_REQUEST, payload: {data, cb}
    }
}
export function signOut() {
    return {
        type: SIGN_OUT
    }
}
export function register(data, cb) {
    return {
        type: REGISTER_REQUEST, payload: {data, cb}
    }
}
export function getUserInfo() {
    return {
        type: GET_USER_INFO_REQUEST
    }
}
export function getUsersList(data) {
    return {
        type: GET_USERS_LIST_REQUEST, payload: {data}
    }
}
export function createTransaction(data, cb) {
    return {
        type: CREATE_TRANSACTION_REQUEST, payload: {data, cb}
    }
}
export function getTransactionList() {
    return {
        type: GET_TRANSACTION_LIST_REQUEST
    }
}


