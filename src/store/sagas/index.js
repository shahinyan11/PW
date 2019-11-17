import { all, fork } from "redux-saga/effects";
import user from "./user";


export default function* root() {
    const sagas = [
        user
    ];
    yield all(sagas.map(fork));
}
