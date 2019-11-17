import {combineReducers} from 'redux'
import { reducer as form } from 'redux-form'
import {
    SIGN_IN_REQUEST_SUCCESS,
    SIGN_OUT,
    REGISTER_REQUEST_SUCCESS,
    GET_USER_INFO_REQUEST_SUCCESS,
    GET_USERS_LIST_REQUEST_SUCCESS,
    CREATE_TRANSACTION_REQUEST_SUCCESS,
    GET_TRANSACTION_LIST_REQUEST_SUCCESS
} from "../actions";

const initialState = {
    id_token: null,
    userData: null,
    filterUsers: [],
    transactionList: []
};

function index(state = initialState, action) {
    switch (action.type) {

        case SIGN_IN_REQUEST_SUCCESS: {
            const {id_token} = action.payload.data;
            if(id_token){
                localStorage.setItem('id_token', id_token);
            }
            return {
                ...state,
                id_token: action.payload.data.id_token,
            }
        }
        case SIGN_OUT: {
                localStorage.removeItem('id_token');
                window.location.reload()
            return {
                ...state,
            }
        }
        case REGISTER_REQUEST_SUCCESS: {
            const {id_token} = action.payload.data;
            if(id_token){
                localStorage.setItem('id_token', id_token);
            }
            return {
                ...state,
                id_token: action.payload.data.id_token,
            }
        }
        case GET_USER_INFO_REQUEST_SUCCESS: {
            const {user_info_token} = action.payload.data;
            return {
                ...state,
                userData: user_info_token,
            }
        }
        case GET_USERS_LIST_REQUEST_SUCCESS: {
            const {data} = action.payload;
            window.usersList = data
            return {
                ...state,
                filterUsers: data,
            }
        }
        case CREATE_TRANSACTION_REQUEST_SUCCESS: {
            const {userData, transactionList} = state;
            const data = action.payload.data.trans_token;
            userData.balance = data.balance;
            transactionList.unshift(data)
            return {
                ...state,
                userData: {...userData},
                transactionList: [...transactionList]
            }
        }
        case GET_TRANSACTION_LIST_REQUEST_SUCCESS: {
            const data = action.payload.data.trans_token;
            return {
                ...state,
                transactionList: data.reverse(),
            }
        }

        default: {
            return state;
        }
    }
}


const reducers = combineReducers({
    index,
    form
});

export default reducers;
