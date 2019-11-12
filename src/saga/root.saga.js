import { put, takeEvery, all } from 'redux-saga/effects'

import axios from "../http/star-wars-default-config";
import {getPeopleSuccess, getPeople as getPeopleAction, getPeopleFail} from "../actions";

function* getPeople() {
    try {
        const response = yield axios.get('/people');
        put( getPeopleSuccess(response.data) );
    } catch(err) {
        console.err(err);
        put( getPeopleFail(err) );
    }
}

function*  watchGetPeopleAction() {
    yield takeEvery(getPeopleAction(), getPeople);
}

export default function* rootSaga() {
    yield all([
        watchGetPeopleAction(),
    ]);
}
