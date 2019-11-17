import axios from "axios";
const baseUrl = 'http://193.124.114.46:3001'

function TokenHeaders() {
    return {
        headers : {
            Authorization : `Bearer ${localStorage.getItem('id_token')}`
        }
    }
}


export function signIn(data) {
    return axios.post( `${baseUrl}/sessions/create`, data)
}
export function register(data) {
    return axios.post( `${baseUrl}/users`, data)
}
export function getUserInfo() {
    return axios.get( `${baseUrl}/api/protected/user-info`, TokenHeaders())
}
export function getUsersList(data) {
    return axios.post( `${baseUrl}/api/protected/users/list`, data, TokenHeaders())
}
export function createTransaction(data) {
    return axios.post( `${baseUrl}/api/protected/transactions`, data, TokenHeaders())
}
export function getTransactionList() {
    return axios.get( `${baseUrl}/api/protected/transactions`, TokenHeaders())
}
